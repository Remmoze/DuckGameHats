import Main from "./components/Main";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

function App() {
    const [showWelcome, setShowWelcome] = useState(window.location.hostname !== "localhost");
    return (
        <>
            <Dialog open={showWelcome} onClose={() => setShowWelcome(false)}>
                <DialogTitle>Hello!</DialogTitle>
                <DialogContent>This site is still heavily under construction. No criticism needed.</DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowWelcome(false)}>ok</Button>
                </DialogActions>
            </Dialog>
            <Main />
        </>
    );
}

export default App;
