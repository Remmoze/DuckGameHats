import { encryptHat } from "./HatCipher.js";
import { makeSafeName } from "../utils.jsx";
import fileDownload from "js-file-download";

const GenerateHatFile = (name, type, imageUrl) => {
    let hat = encryptHat(name, type, imageUrl);

    const data = new Uint8Array(hat);
    return new Blob([data], { type: "application/octet-stream" });
};

const makeName = (name) => {
    name = makeSafeName(name);
    if (name.trim() === "") {
        name = makeSafeName(Math.random().toString(16).substring(8));
    }
    return name;
};

const SaveHatFile = (name, data) => {
    name = makeName(name);
    let file = GenerateHatFile(name, data.type, data.fileBase64);
    fileDownload(file, name + ".hat");
};

const SavePngFile = async (name, data) => {
    name = makeName(name);
    let blob = await fetch(data.fileBase64).then((r) => r.blob());
    fileDownload(blob, name + ".png");
};

//todo: generate png file

export { SaveHatFile, SavePngFile };
