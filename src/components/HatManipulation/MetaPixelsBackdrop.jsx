import { Close } from "@mui/icons-material";
import { Backdrop, Divider, Paper, Grid, Typography, IconButton, Box } from "@mui/material";
import { useState } from "react";
import { extractMetaPixels } from "./MetaExtraction";
import { processPixels } from "./MetaProcessing";

const MetaPixelsBackdrop = ({ name, showBackdrop, setShowBackdrop, image }) => {
    const [pixelData] = useState(processPixels(extractMetaPixels(image)));

    return (
        <Backdrop
            open={showBackdrop}
            onClick={(e) => {
                if (e.target.classList.contains("MuiBackdrop-root")) setShowBackdrop(false);
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    minWidth: 400,
                    minHeight: 400,
                    backgroundColor: "#333",
                    color: "#eee",
                }}
            >
                <Grid container justifyContent="space-between" alignItems="center" mb={-1}>
                    <Grid item mt={1} ml={2}>
                        <Typography gutterBottom variant="h4" component="div">
                            {name || "No Name"}
                        </Typography>
                    </Grid>
                    <Grid item mr={2}>
                        <IconButton onClick={(e) => setShowBackdrop(false)}>
                            <Close color="primary" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Box sx={{ padding: 2 }}>
                    {pixelData.map((pixel) => (
                        <>
                            <div key={pixel.id}>{`${pixel.id}: ${pixel.name}`}</div>
                            <div>{pixel.format}</div>
                            <Divider variant="middle" />
                        </>
                    ))}
                </Box>
            </Paper>
        </Backdrop>
    );
};

export default MetaPixelsBackdrop;
