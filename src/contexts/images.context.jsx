import {createContext, useContext, useEffect, useState} from "react";
import {hostname, UserContext} from "./user.context";
import {ModeContext} from "./mode.context";

const imageAPIEndpoint = `${hostname}/api/image/`;

export const ImagesContext = createContext({
    result: null,
    images: {},
    imageBeingChecked: false,
    imagesBeingLoaded: false,
    checkImage: imagePath => imagePath,
    darkImages: {}
});

export const ImagesContextProvider = function ({children}) {
    const {user} = useContext(UserContext);
    const {dark} = useContext(ModeContext);

    const [result, setResult] = useState("");
    const [imageBeingChecked, setImageBeingChecked] = useState(false);
    const [imageBeingLoaded, setImageBeingLoaded] = useState(false);
    const [images, setImages] = useState({});
    const [darkImages, setDarkImages] = useState({})

    useEffect(() => {
        if (user && !dark) {
            setImageBeingLoaded(true);
            fetch(imageAPIEndpoint, {credentials: 'include'})
                .then(res => res.json())
                .then(res => {
                    if (res?.data)
                        setImages(res.data)
                    else
                        alert(JSON.stringify(res));
                })
                .finally(() => setImageBeingLoaded(false))
        } else if (dark) {
            setImages(false);
        }
    }, [user, result, imageBeingChecked, dark]);

    const checkImage = async (imageFile, mod = null) => {
        setImageBeingChecked(true);
        if (!dark) {
            try {
                const formData = new FormData();
                console.log(imageFile);
                formData.append("image", imageFile);

                const response = await fetch(imageAPIEndpoint, {
                    method: "POST",
                    body: formData,
                    credentials: "include"
                });

                if (response.ok) {
                    const res = await response.json();
                    if (res?.result) {
                        setResult(res.result);
                    } else
                        alert(JSON.stringify(res));
                } else {
                    alert("Image upload failed")
                }
            } catch (error) {
                alert(`Error occurred during image upload: ${error}`);
            }
            setImageBeingChecked(false);
        } else {
            setTimeout(() => {
                setImageBeingChecked(false);
                setResult(mod);
                const newID = `${Object.keys(darkImages).length + 1}`;
                const type = imageFile.name.endsWith("mp4") || imageFile.name.endsWith("mkv") ? 'video' : 'image'
                setDarkImages({...darkImages, [newID]: {id: newID, result: mod, url: URL.createObjectURL(imageFile), type}});
            }, 10000);
        }
    }

    const values = {
        checkImage,
        result,
        images,
        imageBeingChecked,
        imageBeingLoaded,
        darkImages
    }

    return (
        <ImagesContext.Provider value={values}>
            {children}
        </ImagesContext.Provider>
    )
}