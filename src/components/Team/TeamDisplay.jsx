import { useEffect, useState } from "react";
import Canvas from "../Canvas";
import { createNewImage } from "../utils";
import { useRecoilValue } from "recoil";
import { showBaseState, showDuckState } from "../../atoms";

// 97 56
import Template from "../../media/colors_only.png";
import Example from "../../media/templateVisual.png";
import Duck from "../../media/template_duck.png";
import Transparent from "../../media/transparent.png";

const TeamDisplay = ({ data }) => {
    const showBase = useRecoilValue(showBaseState);
    const showDuck = useRecoilValue(showDuckState);
    const [base, setBase] = useState(null);
    const [duck, setDuck] = useState(null);
    const [hatImg, setHatImg] = useState(null);
    const [trans, setTrans] = useState(null);

    useEffect(() => {
        createNewImage(Template).then(setBase);
        createNewImage(Duck).then(setDuck);
        createNewImage(Transparent).then(setTrans);
        if (data === null) {
            createNewImage(Example).then(setHatImg);
        } else {
            setHatImg(data.image);
        }
    }, [data]);

    const canvasUpdate = (context) => {
        // fix this monster

        if (trans === null || data === null) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        } else {
            context.drawImage(trans, 0, 0, base.width * 5, base.height * 5);
        }

        context.imageSmoothingEnabled = false;
        if (base !== null && (showBase || hatImg === null)) {
            context.drawImage(base, 0, 0, base.width * 5, base.height * 5);
        }
        if (duck !== null && (showDuck || hatImg === null)) {
            context.drawImage(duck, 0, 0, base.width * 5, base.height * 5);
        }

        if (hatImg !== null && base !== null) {
            context.drawImage(hatImg, 0, 0, 97, 56, 0, 0, base.width * 5, base.height * 5);
            if (showBase) {
                context.lineWidth = 2;
                context.strokeStyle = "#FFF0F0";
                context.strokeRect(0, 0, hatImg.width * 5, hatImg.height * 5);
            }
        }
    };

    return <Canvas width={base?.width * 5 || 485} height={base?.height * 5 || 280} update={canvasUpdate} />;
};

export default TeamDisplay;
