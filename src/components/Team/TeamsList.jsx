import Team from "./Team";
import { Grid } from "@mui/material";

const TeamsList = ({ teams, onDelete }) => {
    if (teams.length === 0) {
        return (
            <Grid item>
                <Team hatImage={null} onDelete={() => {}} />
            </Grid>
        );
    }

    return (
        <>
            {teams.map((team) => (
                <Grid item key={team}>
                    <Team hatImage={team} onDelete={onDelete} />
                </Grid>
            ))}
        </>
    );
};

export default TeamsList;
