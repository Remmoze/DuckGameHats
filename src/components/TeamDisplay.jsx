import { useEffect, useState } from "react";
import Canvas from "./Canvas";
import { createNewImage } from "./utils";

// 97 56
import Template from "../media/colors_only.png";
import Example from "../media/templateVisual.png";

const TeamDisplay = ({ hatImage }) => {
    const [base, setBase] = useState(null);
    const [hatImg, setHatImg] = useState(null);

    useEffect(() => {
        createNewImage(Template).then(setBase);
        createNewImage(hatImage === null ? Example : hatImage).then(setHatImg);
    }, []);

    const canvasUpdate = (context) => {
        context.imageSmoothingEnabled = false;
        if (base !== null) {
            context.drawImage(base, 0, 0, base.width * 5, base.height * 5);
        }
        if (hatImg !== null) {
            context.drawImage(hatImg, 0, 0, base.width * 5, base.height * 5);
        }
    };

    return <Canvas width={base?.width * 5 || 485} height={base?.height * 5 || 280} update={canvasUpdate} />;
};

export default TeamDisplay;
