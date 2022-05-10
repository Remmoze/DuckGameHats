import { Grid, TextField } from "@mui/material";

const TeamSettings = ({ name, setName, disabled }) => {
    return (
        <Grid container>
            <Grid item>
                <TextField
                    error={name === ""}
                    label="Name"
                    variant="filled"
                    value={disabled ? "Default hat" : name}
                    disabled={disabled}
                    onChange={({ target }) => setName(target.value)}
                />
            </Grid>
        </Grid>
    );
};

export default TeamSettings;
