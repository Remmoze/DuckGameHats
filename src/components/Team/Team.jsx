import { Box, Grid } from "@mui/material";
import TeamDisplay from "./TeamDisplay";

import { useState } from "react";
import TeamSettings from "./TeamSettings";

const Team = ({ data, onDelete, showbase, showDuck }) => {
    const [disabled] = useState(data === null);
    const [name, setName] = useState(data === null ? "Default hat" : data.name);

    return (
        <Box
            sx={{
                padding: 1,
                borderWidth: "1px 1px 1px 1px",
                borderStyle: "solid",
                borderColor: "#333",
                backgroundColor: "#252526",
            }}
        >
            <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
                <Grid item>
                    <TeamSettings data={data} onDelete={onDelete} name={name} setName={setName} disabled={disabled} />
                </Grid>
                <Grid item>
                    <Box mt={1} sx={{ border: "1px solid #000" }}>
                        <TeamDisplay {...{ showbase, showDuck }} data={data || null} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Team;
