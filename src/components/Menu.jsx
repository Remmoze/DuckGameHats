import { Button, Grid, Checkbox, Typography } from "@mui/material";
import FileUploader from "./FileUpload";

const Menu = ({ addTeam, deleteAll, showbase, setShowBase, showDuck, setShowDuck }) => {
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
            <Grid item mr={-1.5}>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item>
                        <Typography color="white" variant="h6">
                            Show Base
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox checked={showbase} onChange={(e, value) => setShowBase(value)} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item mt={-1} mr={-1.5}>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    <Grid item>
                        <Typography color="white" variant="h6">
                            Show Duck
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox checked={showDuck} onChange={(e, value) => setShowDuck(value)} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Menu;
