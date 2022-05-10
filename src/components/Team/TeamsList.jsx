import Team from "./Team";
import { Grid } from "@mui/material";

const TeamsList = ({ teams }) => {
    if (teams.length === 0) {
        return (
            <Grid item>
                <Team hatImage={null} />
            </Grid>
        );
    }

    return (
        <>
            {teams.map((team) => (
                <Grid item key={team}>
                    <Team hatImage={team} />
                </Grid>
            ))}
        </>
    );
};

export default TeamsList;
