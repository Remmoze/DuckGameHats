import Metapixels from "./MetaVault";

// input: array [ {R, G, B, A}, ...]
const processPixels = (pixels) => {
    const data = [];
    for (const { R, G, B } of pixels) {
        if (!(R in Metapixels)) continue;

        const pixel = Metapixels[R];

        data.push({ ...pixel, format: pixel.format(G, B) });
    }
    return data;
};

export { processPixels };
