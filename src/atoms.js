import { atom } from "recoil";

const teamsState = atom({
    key: "teams",
    default: [],
});

const showBaseState = atom({
    key: "showBase",
    default: true,
});

const showDuckState = atom({
    key: "showDuck",
    default: true,
});

export { teamsState, showBaseState, showDuckState };
