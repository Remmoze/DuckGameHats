import { Button, Grid, Checkbox, Typography } from "@mui/material";
import FileUploader from "./FileUpload";
import { useSetRecoilState, useRecoilState } from "recoil";
import { teamsState, showBaseState, showDuckState } from "../atoms";
import { createTeam } from "./Team/TeamData";

const Menu = () => {
    const setTeams = useSetRecoilState(teamsState);
    const [showBase, setShowBase] = useRecoilState(showBaseState);
    const [showDuck, setShowDuck] = useRecoilState(showDuckState);

    const addTeam = async (imgUrl, file) => {
        let team = await createTeam(imgUrl, file);
        setTeams((teams) => [...teams, team]);
    };

    const deleteAll = () => {
        setTeams([]);
    };

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
                        <Checkbox checked={showBase} onChange={(e, value) => setShowBase(value)} />
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
