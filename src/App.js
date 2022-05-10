import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Menu from "./components/Menu";
import TeamsList from "./components/Team/TeamsList";
import { createTeam } from "./components/TeamData";

function App() {
    const [teams, setTeams] = useState([]);

    const addTeam = async (imageUrl) => {
        let team = await createTeam(imageUrl);
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
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                rowSpacing={2}
                columnSpacing={2}
            >
                <TeamsList teams={teams} onDelete={deleteTeam} />
            </Grid>
            <Box
                sx={{
                    position: "fixed",
                    top: 15,
                    right: 15,
                }}
            >
                <Menu addTeam={addTeam} deleteAll={deleteAll} />
            </Box>
        </>
    );
}

export default App;
