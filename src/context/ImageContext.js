import React, {createContext, useContext} from 'react';


const ImagePicker = createContext()

    const ImagePickerProvider = ({children})=>{
        return (
            <ImagePicker.Provider>
                {children}
            </ImagePicker.Provider>
        )
    }

export const UseImage =()=> useContext(ImagePicker)


    export default ImagePickerProvider;
