import { Grid, Box } from "@mui/material";

import Menu from "./Menu";
import TeamsList from "./Team/TeamsList";

const Main = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                rowSpacing={2}
                columnSpacing={2}
            >
                <TeamsList />
            </Grid>
            <Box
                sx={{
                    position: "fixed",
                    top: 15,
                    right: 15,
                }}
            >
                <Menu />
            </Box>
        </>
    );
};

export default Main;
