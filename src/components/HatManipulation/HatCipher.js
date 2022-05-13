import aesjs from "aes-js";

const key = [243, 22, 152, 32, 1, 244, 122, 111, 97, 42, 13, 2, 19, 15, 45, 230];
const hatMagicNo = [117, 222, 121, 208, 126, 110, 1, 0];
const hatCapeMagicNo = [225, 50, 133, 154, 95, 61, 2, 0];

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
const padBytes = (data) => {
    let paddedData = [...data];
    let len = paddedData.length;
    let padByte = 16 - (len % 16);
    for (let i = 0; i < padByte; i++) {
        paddedData.push(padByte);
    }
    return paddedData;
};

const encryptHat = (name, type, imageURL) => {
    let data = [];
    const magic = type === "small" ? hatMagicNo : hatCapeMagicNo;
    const byteName = fromString(name);
    data = data.concat(magic, byteName.length, byteName);

    const imageData = fromString(atob(dataURLToBase64(imageURL)));
    data = data.concat(getIntBytes(imageData.length), imageData);

    let saveData = [];
    debugger;
    const iv = generateIV();
    const aesCBC = new aesjs.ModeOfOperation.cbc(key, iv);
    saveData = saveData.concat(getIntBytes(iv.length), iv);
    saveData.push(...aesCBC.encrypt(padBytes(data)));
    return saveData;
};

export { encryptHat };
