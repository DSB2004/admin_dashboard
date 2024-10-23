import React, { FC, InputHTMLAttributes, useState, ChangeEvent } from 'react';
import Button from '../button/border_button';

interface IPROPS extends InputHTMLAttributes<HTMLInputElement> {
    defaultVal?: string; // Optional prop
}

const FileInput: FC<IPROPS> = ({ defaultVal = "", name }) => {
    const [Image, setImage] = useState<string>(defaultVal); // Initialize state with defaultVal or an empty string

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const fileUrl = URL.createObjectURL(file);
            setImage(fileUrl); // Update the image preview
        }
    };

    const handleClick = () => {
        const fileInput = document.getElementById('file-input') as HTMLInputElement;
        fileInput?.click();
    };

    return (
        <div className="flex gap-2 items-center">
            <img
                src={Image}
           
                className="h-14 w-14 ml-0 md:ml-5 rounded-full"
            />
            <Button type="button" onClick={handleClick}>
                Click to replace
            </Button>
            <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                name={name}
                onChange={handleImageChange}
            />
        </div>
    );
};

export default FileInput;
