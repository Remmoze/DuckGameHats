import { teamsState } from "../../atoms";
import { useRecoilValue } from "recoil";

import { Grid } from "@mui/material";

import Team from "./Team";

const TeamsList = ({ onDelete }) => {
    const teams = useRecoilValue(teamsState);

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
