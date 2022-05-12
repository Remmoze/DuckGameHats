const createNewImage = (newUrl) => {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = newUrl;
        image.addEventListener("load", (e) => {
            resolve(image);
        });
    });
};

const makeSafeName = (name) => {
    return name
        .toLowerCase()
        .replace(/[^0-9a-z ]/g, "")
        .split(" ")
        .filter((x) => x.length > 0)
        .map((s) => s[0].toUpperCase() + s.substring(1))
        .join("");
};

export { createNewImage, makeSafeName };
