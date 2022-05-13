import aesjs from "aes-js";

const key = [243, 22, 152, 32, 1, 244, 122, 111, 97, 42, 13, 2, 19, 15, 45, 230];
const hatMagicNo = [117, 222, 121, 208, 126, 110, 1, 0];
const hatCapeMagicNo = [225, 50, 133, 154, 95, 61, 2, 0];

const generateIV = () => Array.from(Array(16), () => Math.floor(Math.random() * 256));
const fromString = (str) => str.split("").map((char) => char.charCodeAt(0));
const toString = (bytes) => bytes.map((byte) => String.fromCharCode(parseInt(byte))).join("");
const dataURLToBase64 = (dataURL) => dataURL.substring(dataURL.indexOf(",") + 1);
const base64TodataURL = (base64) => {
    if (base64.indexOf(",") === -1) {
        return "data:image/png;base64," + base64;
    }
    return base64;
};
const getIntBytes = (x) => {
    const bytes = [];
    for (let i = 3; i >= 0; i--) {
        bytes[i] = x & 255;
        x >>= 8;
    }
    return bytes.reverse();
};

const bytesToInt = (bytes) => {
    let x = bytes[3];
    for (let i = 2; i >= 0; i--) {
        x <<= 8;
        x |= bytes[i];
    }
    return x;
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
    const iv = generateIV();
    const aesCBC = new aesjs.ModeOfOperation.cbc(key, iv);
    saveData = saveData.concat(getIntBytes(iv.length), iv);
    saveData.push(...aesCBC.encrypt(padBytes(data)));

    return saveData;
};

const decryptHat = (hatBytes) => {
    let offset = 0;
    const ivLength = bytesToInt(hatBytes.slice(0, (offset += 4)));
    const iv = hatBytes.slice(offset, (offset += ivLength));
    const aesCBC = new aesjs.ModeOfOperation.cbc(key, iv);
    const data = Array.from(aesCBC.decrypt(hatBytes.slice(offset)));

    offset = 8; // 0-8 magic
    const nameLength = data[offset++];
    const byteName = data.slice(offset, (offset += nameLength));
    const name = toString(byteName);

    const imageLength = bytesToInt(data.slice(offset, (offset += 4)));
    const imageData = data.slice(offset, (offset += imageLength));

    const base64 = btoa(toString(imageData));

    return {
        url: base64TodataURL(base64),
        name,
    };
};

export { encryptHat, decryptHat };
