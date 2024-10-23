import React, { FC, InputHTMLAttributes, useState, ChangeEvent } from 'react';
import Button from '../button/border_button';

interface IPROPS extends InputHTMLAttributes<HTMLInputElement> {

}

const FileInput: FC<IPROPS> = ({ name }) => {
    const [File, setFile] = useState<string>("");

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFile(file.name);
        }
    };

    const handleClick = () => {
        const fileInput = document.getElementById('file-input') as HTMLInputElement;
        fileInput?.click();
    };

    return (
        <div className="flex gap-2 items-center">

            <Button type="button" onClick={handleClick}>
                Click to Add
            </Button>
            <input
                id="file-input"
                multiple={false}
                type="file"
                accept=".pdf, .csv, .doc, .docx, .ppt, .pptx"
                className="hidden"
                name={name}
                onChange={handleFileChange}
            />
            <h1 className='text-xs ml-2'>{File}</h1>
        </div>
    );
};

export default FileInput;
