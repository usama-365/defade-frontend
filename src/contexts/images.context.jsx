import {createContext, useContext, useEffect, useState} from "react";
import {hostname, UserContext} from "./user.context";

const imageAPIEndpoint = `${hostname}/api/image/`;

export const ImagesContext = createContext({
    result: null,
    images: {},
    imageBeingChecked: false,
    imagesBeingLoaded: false,
    checkImage: (imagePath) => {}
});

export const ImagesContextProvider = function ({children}) {
    const {user} = useContext(UserContext);

    const [result, setResult] = useState("");
    const [imageBeingChecked, setImageBeingChecked] = useState(false);
    const [imageBeingLoaded, setImageBeingLoaded] = useState(false);
    const [images, setImages] = useState(false);

    useEffect(() => {
        if (user) {
            setImageBeingLoaded(true);
            fetch(imageAPIEndpoint, {credentials: 'include'})
                .then(res => res.json())
                .then(res => {
                    if (res?.data)
                        setImages(res.data)
                    else
                        alert(JSON.stringify(res));
                })
                .then(console.log)
                .finally(() => setImageBeingLoaded(false))
        }
    }, [user, result, imageBeingChecked]);

    const checkImage = async (imageFile) => {
        setImageBeingChecked(true);
        try {
            const formData = new FormData();
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
                }
                else
                    alert(JSON.stringify(res));
            } else {
                alert("Image upload failed")
            }
        } catch (error) {
            alert("Error occurred during image upload:", error);
        }
        setImageBeingChecked(false);
    }

    const values = {
        checkImage,
        result,
        images,
        imageBeingChecked,
        imageBeingLoaded
    }

    return (
        <ImagesContext.Provider value={values}>
            {children}
        </ImagesContext.Provider>
    )
}