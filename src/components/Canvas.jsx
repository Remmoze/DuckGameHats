import { useRef, useEffect } from "react";

const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;

        const render = () => {
            draw(context);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};

const Canvas = ({ update, width, height }) => {
    const canvasRef = useCanvas(update);

    return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
