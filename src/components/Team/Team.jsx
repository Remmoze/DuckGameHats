import { TextField, Box, Grid } from "@mui/material";
import TeamDisplay from "./TeamDisplay";

import { useState } from "react";
import TeamSettings from "./TeamSettings";

const Team = ({ hatImage, onDelete }) => {
    const [disabled] = useState(hatImage === null);
    const [name, setName] = useState("");

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
                    <TeamSettings onDelete={onDelete} id={hatImage} name={name} setName={setName} disabled={disabled} />
                </Grid>
                <Grid item>
                    <Box mt={1} sx={{ border: "1px solid #000" }}>
                        <TeamDisplay hatImage={hatImage || null} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Team;
