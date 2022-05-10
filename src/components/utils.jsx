const createNewImage = (newUrl) => {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = newUrl;
        image.addEventListener("load", (e) => {
            resolve(image);
        });
    });
};

export { createNewImage };
