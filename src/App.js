import { Button, Grid, Paper } from "@mui/material";
import TeamsList from "./components/TeamsList";

function App() {
    return (
        <>
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                <Grid item>aaaaaaaaaaaa</Grid>
                <Grid item width={500} height={280}>
                    <TeamsList />
                </Grid>
                <Button onClick={() => {}} variant="contained">
                    Add Team
                </Button>
            </Grid>
        </>
    );
}

export default App;
