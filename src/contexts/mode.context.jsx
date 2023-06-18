import {createContext, useEffect, useState} from "react";

const DEFAULT_VALUES = {
    dark: false
}

export const ModeContext = createContext({
    dark: DEFAULT_VALUES.dark
});

export const ModeContextProvider = function ({children}) {
    const [dark, setDark] = useState(DEFAULT_VALUES.dark);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'F2') {
                setDark((prevDark) => !prevDark);
            }
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    const values = {
        dark
    };

    return (
        <ModeContext.Provider value={values}>
            {children}
        </ModeContext.Provider>
    );
}