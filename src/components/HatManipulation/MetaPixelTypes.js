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

class BoolMetaPixel {
    constructor(id, name, description) {
        super(id, name, description);
    }

    format() {
        return "Enabled";
    }
}

class Vector2MetaPixel {
    constructor(id, name, description) {
        super(id, name, description);
    }

    format(G, B) {
        return `Offset X: ${128 - G}, Y: ${128 - B}`;
    }
}

class Vector2NormalizedMetaPixel {
    constructor(id, name, description, signed = false) {
        super(id, name, description);
        this.signed = signed;
    }

    format(G, B) {
        if (this.signed) {
            G /= 128;
            G -= 1;
            B /= 128;
            B -= 1;
        } else {
            G /= 256;
            B /= 256;
        }
        return `Offset X: ${G.toFixed(3)}, Y: ${B.toFixed(3)}`;
    }
}

class FloatMetaPixel {
    constructor(id, name, description) {
        super(id, name, description);
    }

    format(G) {
        return "Value: " + G + "f";
    }
}

class IntMetaPixel {
    constructor(id, name, description) {
        super(id, name, description);
    }

    format(G) {
        return "Value: " + G;
    }
}

//exclusive for id 32
class PairMetaPixel {
    constructor(id, name, description) {
        super(id, name, description);
    }

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
