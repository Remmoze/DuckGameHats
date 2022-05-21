import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper } from "@mui/material";

import { createTeam } from "./Team/TeamData";
import { teamsState } from "../atoms";

import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";

import Hat1 from "../media/sampleHats/Blacknwhite.png";
import Hat2 from "../media/sampleHats/China.png";
import Hat3 from "../media/sampleHats/Money.png";
import Hat4 from "../media/sampleHats/Star.png";

const Footer = () => {
    const setTeams = useSetRecoilState(teamsState);
    const [showInfo, setShowInfo] = useState(false);

    const AddSampleHats = async () => {
        let hats = [
            createTeam(Hat1, null, "BlackAndWhite"),
            createTeam(Hat2, null, "China"),
            createTeam(Hat3, null, "Money"),
            createTeam(Hat4, null, "Star"),
        ];
        let teams = await Promise.all(hats);
        setTeams((current) => [...current, ...teams]);
    };

    return (
        <>
            <Dialog open={showInfo} onClose={() => setShowInfo(false)}>
                <DialogTitle>DuckGame Hats</DialogTitle>
                <DialogContent>
                    {"This site is a tool to to convert .hat <--> .png files and view metapixels of hats."}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            AddSampleHats();
                            setShowInfo(false);
                        }}
                    >
                        Add sample hats
                    </Button>
                    <Button onClick={() => setShowInfo(false)}>ok</Button>
                </DialogActions>
            </Dialog>
            <Paper
                variant="outlined"
                elevation={0}
                sx={{
                    position: "fixed",
                    right: 10,
                    bottom: 10,
                    backgroundColor: "transparent",
                    borderRadius: "16px",
                }}
            >
                <IconButton aria-label="info" color="primary" onClick={() => setShowInfo(true)}>
                    <InfoIcon />
                </IconButton>
                <IconButton
                    color="primary"
                    aria-label="github"
                    onClick={() => window.open("https://github.com/Remmoze/DuckGameHats", "_blank")}
                >
                    <GitHubIcon />
                </IconButton>
            </Paper>
        </>
    );
};

export default Footer;
