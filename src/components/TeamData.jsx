import { createNewImage } from "./utils";

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

const createTeam = async (imgURL) => {
    console.log("Creating new hat:", imgURL);
    let img = await createNewImage(imgURL);
    console.log("Hat type:", getType(img.width, img.height));

    return {
        id: imgURL,
        url: imgURL,
        image: img,
        type: getType(img.width, img.height),
    };
};

export { createTeam };
