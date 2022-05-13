import { useState } from "react";

import { useSetRecoilState } from "recoil";
import { teamsState } from "../../atoms";

import { Button, Grid, IconButton, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InfoIcon from "@mui/icons-material/Info";
import DownloadIcon from "@mui/icons-material/Download";

import { SaveHatFile, SavePngFile } from "../HatManipulation/GenerateHat";
import MetaPixelsDialog from "../HatManipulation/MetaPixelsDialog";

const TeamSettings = ({ data }) => {
    const [disabled] = useState(data === null);
    const [name, setName] = useState(disabled ? "Default hat" : data.name);
    const setTeams = useSetRecoilState(teamsState);

    const [showDialog, setShowDialog] = useState(false);

    const onDelete = () => {
        setTeams((teams) => teams.filter((team) => team.id !== data.id));
    };

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
                                startIcon={<DownloadIcon />}
                                onClick={() => SaveHatFile(name, data)}
                            >
                                .hat
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                size="small"
                                variant="outlined"
                                disabled={name === ""}
                                startIcon={<DownloadIcon />}
                                onClick={() => SavePngFile(name, data)}
                            >
                                .png
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
                            <IconButton onClick={onDelete}>
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
