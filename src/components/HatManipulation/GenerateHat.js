import { encryptHat } from "./HatCipher.js";

const GenerateHatFile = (name, type, imageUrl) => {
    const data = new Uint8Array(encryptHat(name, type, imageUrl));
    return new Blob([data], { type: "application/octet-stream" });
};

export { GenerateHatFile };
