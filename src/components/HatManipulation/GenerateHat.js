import slowAES from "../../aes.js";

/*
    Special thanks to https://github.com/penguinscode/Quackhead
*/
const key = [243, 22, 152, 32, 1, 244, 122, 111, 97, 42, 13, 2, 19, 15, 45, 230];
const hatMagicNo = [117, 222, 121, 208, 126, 110, 1, 0];
const hatCapeMagicNo = [225, 50, 133, 154, 95, 61, 2, 0];
// todo: find out if there are any more these magic numbers using dnspy

const generateIV = () => Array.from(Array(16), () => Math.floor(Math.random() * 256));

const fromString = (str) => str.split("").map((char) => char.charCodeAt(0));

const dataURLToBase64 = (dataURL) => dataURL.substring(dataURL.indexOf(",") + 1);

const getIntBytes = (x) => {
    const bytes = [];
    for (let i = 3; i >= 0; i--) {
        bytes[i] = x & 255;
        x >>= 8;
    }
    return bytes.reverse();
};

const GenerateHatContent = (name, type, imageUrl) => {
    const IV = generateIV();
    const magic = type === "small" ? hatMagicNo : hatCapeMagicNo;
    const byteName = fromString(name);
    const encData = [];
    encData.push(...magic);
    encData.push(byteName.length);
    encData.push(...byteName);

    const imageData = fromString(atob(dataURLToBase64(imageUrl)));
    encData.push(...getIntBytes(imageData.length));
    encData.push(...imageData);

    const saveData = [];
    saveData.push(...getIntBytes(IV.length));
    saveData.push(...IV);
    saveData.push(...slowAES.encrypt(encData, 2, key, IV));
    return saveData;
};

const GenerateHatFile = (name, type, imageUrl) => {
    return new Blob([new Uint8Array(GenerateHatContent(name, type, imageUrl))], { type: "application/octet-stream" });
};

export { GenerateHatFile };
