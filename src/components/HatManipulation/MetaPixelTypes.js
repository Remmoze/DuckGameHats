class MetaPixel {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    format() {
        throw new Error("Invalid function call");
    }
}

class BoolMetaPixel extends MetaPixel {
    format() {
        return "Enabled";
    }
}

class Vector2MetaPixel extends MetaPixel {
    format(G, B) {
        return `Offset X: ${128 - G}, Y: ${128 - B}`;
    }
}

class Vector2NormalizedMetaPixel extends MetaPixel {
    constructor(id, name, description, signed = false) {
        super(id, name, description);
        this.signed = signed;
    }

    format(G, B) {
        if (this.signed) {
            G /= 127;
            G -= 1;
            B /= 127;
            B -= 1;
        } else {
            G /= 255;
            B /= 255;
        }
        return `Offset X: ${G.toFixed(1)}, Y: ${B.toFixed(1)}`;
    }
}

class FloatMetaPixel extends MetaPixel {
    constructor(id, name, description, capped = -1) {
        super(id, name, description);
        this.capped = capped;
    }

    format(G) {
        if (this.capped !== -1) {
            G /= this.capped;
        }
        return "Value: " + G + "f";
    }
}

class IntMetaPixel extends MetaPixel {
    format(G) {
        return "Value: " + G;
    }
}

//exclusive for id 32
class PairMetaPixel extends MetaPixel {
    format(G, B) {
        let shapes = ["Point", "Circle", "Box"];
        let styles = ["Emit Around Shape Border Randomly", "Fill Shape Randomly", "Emit Around Shape Border Uniformly"];

        let shape = "Unknown";
        if (G >= 0 && G < shapes.length) {
            shape = shapes[G];
        }

        let style = "Unknown";
        if (G >= 0 && G < styles.length) {
            style = styles[G];
        }

        return "Shape: " + shape + ", Style: " + style;
    }
}

export {
    MetaPixel,
    BoolMetaPixel,
    Vector2MetaPixel,
    Vector2NormalizedMetaPixel,
    FloatMetaPixel,
    IntMetaPixel,
    PairMetaPixel,
};
