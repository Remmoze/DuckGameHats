import { Grid, Paper } from "@mui/material";
import TeamsList from "./components/TeamsList";

import DuckLogo from "./media/duck_logo.png";

function App() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item width={500}>
                    <TeamsList />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
