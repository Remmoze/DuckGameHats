import Team from "./Team";
import { Grid } from "@mui/material";

const TeamsList = ({ teams, onDelete }) => {
    if (teams.length === 0) {
        return (
            <Grid item>
                <Team data={null} onDelete={() => {}} />
            </Grid>
        );
    }

    return (
        <>
            {teams.map((team) => (
                <Grid item key={team.id}>
                    <Team data={team} onDelete={onDelete} />
                </Grid>
            ))}
        </>
    );
};

export default TeamsList;
