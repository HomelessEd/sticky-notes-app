import { createContext, useState } from "react";

const ColourContext = createContext();

const ColourProvider = ({children}) => {
    const [Colour, setColour] = useState("rgba(214, 73, 120, 0.71)")

    return (
        <ColourContext.Provider value = {{Colour, setColour}}>
            {children}
        </ColourContext.Provider>
    );
};

export { ColourContext, ColourProvider };