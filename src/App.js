import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Menu from "./components/Menu";
import TeamsList from "./components/Team/TeamsList";
import { createTeam } from "./components/Team/TeamData";

function App() {
    const [teams, setTeams] = useState([]);
    const [showbase, setShowBase] = useState(true);
    const [showDuck, setShowDuck] = useState(true);

    const [showWelcome, setShowWelcome] = useState(true);

    const addTeam = async (imageUrl, file) => {
        let team = await createTeam(imageUrl, file);
        setTeams((teams) => [...teams, team]);
    };

    const deleteTeam = (id) => {
        setTeams((teams) => teams.filter((team) => team.id !== id));
    };

    const deleteAll = () => {
        setTeams([]);
    };

    return (
        <>
            <Dialog open={showWelcome} onClose={() => setShowWelcome(false)}>
                <DialogTitle>Hello!</DialogTitle>
                <DialogContent>This site is still heavily under construction. No criticism needed.</DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowWelcome(false)}>ok</Button>
                </DialogActions>
            </Dialog>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                rowSpacing={2}
                columnSpacing={2}
            >
                <TeamsList {...{ teams, showbase, showDuck }} onDelete={deleteTeam} />
            </Grid>
            <Box
                sx={{
                    position: "fixed",
                    top: 15,
                    right: 15,
                }}
            >
                <Menu {...{ addTeam, deleteAll, showbase, setShowBase, showDuck, setShowDuck }} />
            </Box>
        </>
    );
}

export default App;
