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

const Canvas = (update) => {
    const canvasRef = useCanvas(update);

    return <canvas ref={canvasRef} width={400} height={200} />;
};

export default Canvas;
