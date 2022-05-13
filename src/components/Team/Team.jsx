import { Box, Grid } from "@mui/material";

import TeamDisplay from "./TeamDisplay";
import TeamSettings from "./TeamSettings";

const Team = ({ data }) => {
    return (
        <Box
            sx={{
                padding: 1,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#333",
                backgroundColor: "#252526",
            }}
        >
            <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
                <Grid item>
                    <TeamSettings data={data} />
                </Grid>
                <Grid item mt={1} mb={-0.5}>
                    <TeamDisplay data={data} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Team;
