import { Dialog, DialogTitle, DialogContent, DialogActions, Divider, Typography, Button } from "@mui/material";
import { useState, Fragment } from "react";
import { extractMetaPixels } from "./MetaExtraction";
import { processPixels } from "./MetaProcessing";

const MetaPixelsDialog = ({ name, showDialog, setShowDialog, image }) => {
    const [pixelData] = useState(processPixels(extractMetaPixels(image)));

    return (
        <Dialog scroll={"body"} open={showDialog} maxWidth={"sm"} onClose={() => setShowDialog(false)}>
            <DialogTitle mb={-2}>
                <Typography gutterBottom variant="h4" component="div">
                    {name || "No Name"}
                </Typography>
            </DialogTitle>
            <DialogContent>
                {/* make this list good pls */}
                {pixelData.map((pixel) => (
                    <Fragment key={pixel.id}>
                        <div>{`${pixel.id}: ${pixel.name}`}</div>
                        <div>{pixel.format}</div>
                        <Divider variant="middle" />
                    </Fragment>
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShowDialog(false)} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MetaPixelsDialog;
