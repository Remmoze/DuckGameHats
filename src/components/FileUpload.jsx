import React, { useRef } from "react";

import { Button } from "@mui/material";

const FileUploader = ({ onFileUpload }) => {
    const uploadImage = ({ target }) => {
        let file = target.files[0];

        if (!file.name.endsWith(".png") && !file.name.endsWith(".hat")) {
            console.error("Invalid hat extension");
            return;
        }

        console.log(file);
        let newUrl = URL.createObjectURL(file);
        let type = file.name.endsWith(".png") ? "png" : "hat";
        onFileUpload(newUrl, file, type);
    };

    const uploadInputRef = useRef(null);
    return (
        <>
            <input ref={uploadInputRef} type="file" accept=".hat,.png" onChange={uploadImage} hidden />
            <Button
                variant="contained"
                size="large"
                onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
            >
                Add Team
            </Button>
        </>
    );
};

export default FileUploader;
