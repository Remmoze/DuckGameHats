import { encryptHat } from "./HatCipher.js";

const GenerateHatFile = (name, type, imageUrl) => {
    let hat = encryptHat(name, type, imageUrl);

    const data = new Uint8Array(hat);
    return new Blob([data], { type: "application/octet-stream" });
};

//todo: generate png file

export { GenerateHatFile };
