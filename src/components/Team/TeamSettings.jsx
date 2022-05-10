import { Button, Grid, IconButton, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InfoIcon from "@mui/icons-material/Info";

const TeamSettings = ({ name, setName, disabled, onDelete, data }) => {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
            <Grid item>
                <TextField
                    size="small"
                    error={name === ""}
                    label="Name"
                    variant="filled"
                    value={disabled ? "Default hat" : name}
                    disabled={disabled}
                    onChange={({ target }) => setName(target.value)}
                />
            </Grid>
            {!disabled && (
                <Grid item>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="baseline">
                        <Grid item>
                            <Button size="small" variant="outlined">
                                Export .hat
                            </Button>
                        </Grid>
                        <Grid item pl={1}>
                            <IconButton>
                                <InfoIcon sx={{ color: "#eee" }} />
                            </IconButton>
                        </Grid>
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
