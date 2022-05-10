import { Paper } from "@mui/material";

import Template from "../media/template.png";

const Team = () => {
    return (
        <>
            <Paper sx={{ backgroundColor: "#222" }}>
                <img width={200} src={Template}></img>
            </Paper>
        </>
    );
};

export default Team;
