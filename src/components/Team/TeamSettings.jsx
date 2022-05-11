import { Button, Grid, IconButton, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InfoIcon from "@mui/icons-material/Info";

import fileDownload from "js-file-download";

import { GenerateHatFile, makeSafeName } from "../HatManipulation/GenerateHat";
import { useState } from "react";
import MetaPixelsDialog from "../HatManipulation/MetaPixelsDialog";

const SaveHat = (name, data) => {
    name = makeSafeName(name);
    if (name.trim() === "") {
        name = makeSafeName(Math.random().toString(16).substring(8));
    }
    let file = GenerateHatFile(name, data.type, data.fileBase64);
    fileDownload(file, name + ".hat");
};

const TeamSettings = ({ name, setName, disabled, onDelete, data }) => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
            <Grid item>
                <TextField
                    sx={{ input: { color: "white" } }}
                    color="secondary"
                    size="small"
                    error={name === ""}
                    label="Name"
                    variant="filled"
                    value={name}
                    disabled={disabled}
                    onChange={({ target }) => setName(target.value)}
                />
            </Grid>
            {!disabled && (
                <Grid item>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="baseline">
                        <Grid item>
                            <Button
                                size="small"
                                variant="outlined"
                                disabled={name === ""}
                                onClick={() => SaveHat(name, data)}
                            >
                                Export .hat
                            </Button>
                        </Grid>
                        {data.type === "full" && (
                            <Grid item pl={1}>
                                <IconButton onClick={() => setShowDialog(true)}>
                                    <InfoIcon sx={{ color: "#eee" }} />
                                </IconButton>
                                <MetaPixelsDialog {...{ name, showDialog, setShowDialog, image: data.image }} />
                            </Grid>
                        )}
                        <Grid item pl={2}>
                            <IconButton onClick={() => onDelete(data.id)}>
                                <DeleteForeverIcon sx={{ color: "red" }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default TeamSettings;
