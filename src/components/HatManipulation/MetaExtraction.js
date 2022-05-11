const getImageData = (image) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    return context.getImageData(96, 0, 1, image.height);
};

const getMetaPixelsFromImageData = (data) => {
    const pixels = [];
    for (let i = 0; i < data.length; i += 4) {
        const [R, G, B, A] = data.slice(i, i + 4);
        if (Math.max(R, G, B, A) > 0) {
            pixels.push({ R, G, B, A });
        }
    }
    return pixels;
};

const extractMetaPixels = (image) => {
    if (image.width < 97 || image.height < 56) {
        throw RangeError("Image dimentions were incorrect.");
    }
    const imageData = getImageData(image);
    const metapixels = getMetaPixelsFromImageData(imageData.data);
    return metapixels;
};

export { extractMetaPixels };
