import { useEffect, useRef, useState } from "react";
import CanvasImage from "./CanvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CanvasComponet = ({ details }) => {
  const { startIndex, numImages, duration, size } = details;
  const [index, setIndex] = useState(startIndex); // Use primitive number for state
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(
      { value: startIndex },
      {
        value: startIndex + numImages - 1,
        duration: duration,
        ease: "linear",
        repeat: -1,
        onUpdate: function () {
          setIndex(Math.round(this.targets()[0].value)); // Update primitive state
        },
      }
    );
  });

  useEffect(() => {
    if (index < 0 || index >= CanvasImage.length) {
      console.error("Index out of bounds:", index);
      return;
    }

    const canvas = canvasRef.current;
    const cxt = canvas.getContext("2d");
    const img = new Image();
    img.src = CanvasImage[index];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      cxt.drawImage(img, 0, 0);
    };
    img.onerror = () => {
      console.error("Failed to load image:", img.src);
    };
  }, [index]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></canvas>
  );
};

export default CanvasComponet;
