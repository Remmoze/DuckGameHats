import { useState } from "react";
import Team from "./Team";

const TeamsList = ({ teams }) => {
    if (teams.length === 0) {
        return <Team />;
    }

    return (
        <>
            {teams.map((team) => (
                <Team hatImage={team} />
            ))}
        </>
    );
};

export default TeamsList;
