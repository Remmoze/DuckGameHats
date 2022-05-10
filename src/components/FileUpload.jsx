import React, { useRef } from "react";

import { Button } from "@mui/material";

const FileUploader = ({ onFileUpload }) => {
    const uploadImage = ({ target }) => {
        let file = target.files[0];
        //check image here

        let newUrl = URL.createObjectURL(file);
        onFileUpload(newUrl);
    };

    const uploadInputRef = useRef(null);
    return (
        <>
            <input ref={uploadInputRef} type="file" accept="image/*" onChange={uploadImage} hidden />
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
