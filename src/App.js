import { Grid } from "@mui/material";
import { useState } from "react";
import FileUploader from "./components/FileUpload";
import TeamsList from "./components/Team/TeamsList";

function App() {
    const [teams, setTeams] = useState([]);

    const addTeam = (imageUrl) => {
        setTeams((teams) => [...teams, imageUrl]);
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
                <TeamsList teams={teams} />
            </Grid>
            <FileUploader onFileUpload={addTeam} />
        </>
    );
}

export default App;
