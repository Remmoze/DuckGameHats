import { Button, Grid } from "@mui/material";
import { useState } from "react";
import FileUploader from "./components/FileUpload";
import TeamsList from "./components/TeamsList";
import Team from "./components/Team";

function App() {
    const [teams, setTeams] = useState([]);

    const addTeam = (imageUrl) => {
        setTeams((teams) => [...teams, imageUrl]);
    };

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={10}>
                <Grid item xs={3}>
                    <TeamsList teams={teams} />
                </Grid>
            </Grid>
            <FileUploader onFileUpload={addTeam} />
        </>
    );
}

export default App;
