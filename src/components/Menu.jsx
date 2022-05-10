import { Button, Grid } from "@mui/material";
import FileUploader from "./FileUpload";

const Menu = ({ addTeam, deleteAll }) => {
    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-end" spacing={1}>
            <Grid item>
                <FileUploader onFileUpload={addTeam} />
            </Grid>
            <Grid item>
                <Button variant="contained" size="large" onClick={deleteAll}>
                    Delete All
                </Button>
            </Grid>
        </Grid>
    );
};

export default Menu;
