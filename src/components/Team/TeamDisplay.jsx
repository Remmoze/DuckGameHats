import { useEffect, useState } from "react";

import { useRecoilValue } from "recoil";
import { showBaseState, showDuckState } from "../../atoms";

import Canvas from "../Canvas";
import { createNewImage } from "../utils";

// 97 56
import Template from "../../media/colors_only.png";
import Example from "../../media/templateVisual.png";
import Duck from "../../media/template_duck.png";
import Transparent from "../../media/transparent.png";

const Scale = 5;
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
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.imageSmoothingEnabled = false;

        if (base === null) return;
        const width = base.width * Scale;
        const height = base.height * Scale;

        if (trans !== null) {
            context.drawImage(trans, 0, 0, width, height);
        }

        if (showBase) {
            context.drawImage(base, 0, 0, width, height);
        }
        if (duck !== null && showDuck) {
            context.drawImage(duck, 0, 0, width, height);
        }

        if (hatImg !== null) {
            context.drawImage(hatImg, 0, 0, 97, 56, 0, 0, width, height);
            if (showBase) {
                context.lineWidth = 1;
                context.strokeStyle = "#FFF0F0AA";
                context.strokeRect(0, 0, hatImg.width * Scale, hatImg.height * Scale);
            }
        }
    };

    return <Canvas width={base?.width * Scale || 485} height={base?.height * Scale || 280} update={canvasUpdate} />;
};

export default TeamDisplay;
