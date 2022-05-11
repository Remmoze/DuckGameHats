import slowAES from "../../aes.js";

/*
    Special thanks to https://github.com/penguinscode/Quackhead
*/
const key = [243, 22, 152, 32, 1, 244, 122, 111, 97, 42, 13, 2, 19, 15, 45, 230];
const hatMagicNo = [117, 222, 121, 208, 126, 110, 1, 0];
const hatCapeMagicNo = [225, 50, 133, 154, 95, 61, 2, 0];
// todo: find out if there are any more these magic numbers using dnspy

const generateIV = () => Array.from(Array(16), () => Math.floor(Math.random() * 256));

const toString = (bytes) => bytes.map((byte) => String.fromCharCode(parseInt(byte))).join("");

const fromString = (str) => str.split("").map((char) => char.charCodeAt(0));

const getBase64FromImage = (image) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    let url = canvas.toDataURL("image/png");
    return url.replace(/^data:image\/(png|jpg);base64,/, "");
};

function getIntBytes(x) {
    var bytes = [];
    var i = 4;
    do {
        bytes[--i] = x & 255;
        x = x >> 8;
    } while (i);
    return bytes.reverse();
}

const GenerateHatContent = (name, image) => {
    const IV = generateIV();
    const xIV = toString(IV); // useless?
    //fix this this is not right
    const magic = image.type === "cape" ? hatCapeMagicNo : hatMagicNo;
    const byteName = fromString(name);
    const encData = [];
    encData.push(...magic);
    encData.push(byteName.length);
    encData.push(...byteName);

    console.log(image);
    console.log(getBase64FromImage(image));
    console.log(atob(getBase64FromImage(image)));
    console.log(fromString(atob(getBase64FromImage(image))));

    const imageData = fromString(atob(getBase64FromImage(image)));
    encData.push(...getIntBytes(imageData.length));
    encData.push(...imageData);

    const saveData = [];
    saveData.push(...getIntBytes(IV.length));
    saveData.push(...IV);
    saveData.push(...slowAES.encrypt(encData, 2, key, IV)); // encrypt
    return saveData;
};

const GenerateHatFile = (name, image) => {
    return new Blob([new Uint8Array(GenerateHatContent(name, image))], { type: "application/octet-stream" });
};

function dataURLToBase64(dataURL) {
    return dataURL.substring(dataURL.indexOf(",") + 1);
}

const test = (name, blob) => {
    debugger;
    const IV = generateIV();
    const xIV = toString(IV); // useless?
    //fix this this is not right
    const magic = hatMagicNo;
    const byteName = fromString(name);
    const encData = [];
    encData.push(...magic);
    encData.push(byteName.length);
    encData.push(...byteName);

    console.log(blob);
    console.log(dataURLToBase64(blob));
    console.log(atob(dataURLToBase64(blob)));
    console.log(fromString(atob(dataURLToBase64(blob))));

    const imageData = fromString(atob(dataURLToBase64(blob)));
    encData.push(...getIntBytes(imageData.length));
    encData.push(...imageData);

    const saveData = [];
    saveData.push(...getIntBytes(IV.length));
    saveData.push(...IV);
    saveData.push(...slowAES.encrypt(encData, 2, key, IV)); // encrypt

    return new Blob([new Uint8Array(saveData)], { type: "application/octet-stream" });
};

export { GenerateHatFile, test };

/*
function generateHatFile(team) {
  var iv = generateIV();
  var xIV = toStr(iv);
  var encData = [];
  var useMagicNo = hatMagicNo;
  if (team.texture.width == 96) {
    useMagicNo = hatCapeMagicNo;
  }
  encData = encData.concat(useMagicNo);
  var teamBytes = fromStr(team.tile.children[0].children[0].value);
  encData = encData.concat([teamBytes.length]);
  encData = encData.concat(teamBytes);
  var imageBytes = fromStr(atob(dataURLToBase64(team.data)));
  encData = encData.concat(getIntBytes(imageBytes.length));
  encData = encData.concat(imageBytes);
  var saveData = [];
  var ivlen = iv.length;
  saveData = saveData.concat(getIntBytes(iv.length));
  saveData = saveData.concat(iv);
  saveData = saveData.concat(doEncrypt(encData, iv, key));
  return saveData;
}
*/
