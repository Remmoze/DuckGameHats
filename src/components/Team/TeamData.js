import { decryptHat } from "../HatManipulation/HatCipher";
import { createNewImage } from "../utils";

const getType = (width, height) => {
    if (width === 64 && height === 32) {
        return "small";
    }
    if (width === 96 && height === 32) {
        return "cape";
    }
    if (width === 96 && height === 56) {
        return "rock";
    }
    if (width >= 97 && height >= 56) {
        return "full";
    }
    return "unknown";
};

const readAsDataURL = (url) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(url);
    });
};

const createTeam = async (imgURL, file, name = "") => {
    console.log("Creating new hat:", imgURL);
    const img = await createNewImage(imgURL);
    const blob = await fetch(imgURL).then((r) => r.blob());
    const stream = await readAsDataURL(blob);
    console.log("Hat type:", getType(img.width, img.height));

    return {
        id: imgURL,
        name: name || file.name.split(".")[0],
        url: imgURL,
        image: img,
        fileBase64: stream,
        type: getType(img.width, img.height),
    };
};

const createTeamFromHatFile = async (blobUrl, file) => {
    let buffer = await fetch(blobUrl).then((data) => data.arrayBuffer());
    let { url, name } = decryptHat(new Uint8Array(buffer));

    return createTeam(url, file, name);
};

export { createTeam, createTeamFromHatFile };
