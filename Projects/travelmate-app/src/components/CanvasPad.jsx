import { useEffect, useRef } from "react";

const CanvasPad = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let drawing = false;

    const start = (e) => {
      drawing = true;
      draw(e);
    };
    const end = () => {
      drawing = false;
      ctx.beginPath();
    };
    const draw = (e) => {
      if (!drawing) return;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#00ffcc";

      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mouseup", end);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return (
    <div className="mb-6 ">
      <h2 className="font-semibold mb-2  place-self-center">Sketchpad</h2>
      <canvas
        ref={canvasRef}
        width="300"
        height="200"
        className="border border-white bg-white  place-self-center w-[500px]"
      ></canvas>
    </div>
  );
};

export default CanvasPad;
