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

const createTeam = async (imgURL, file) => {
    console.log("Creating new hat:", imgURL);
    const img = await createNewImage(imgURL);
    const stream = await readAsDataURL(file);
    console.log("Hat type:", getType(img.width, img.height));

    return {
        id: imgURL,
        name: file.name.split(".")[0],
        url: imgURL,
        image: img,
        fileBase64: stream,
        type: getType(img.width, img.height),
    };
};

export { createTeam };
