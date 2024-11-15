import { useEffect, useRef, useState } from "react"
import CanvasImage from "../CanvasImages";



const CanvasComponet = () => {
  const [index, setIndex] = useState({ value : 0})
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current;
    const cxt = canvas.getContext("2d")
    const img = new Image()
    img.src = CanvasImage[index.value]
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      cxt.drawImage(img,0,0)
    }
  }, [index] )
  
  return <canvas ref={canvasRef} id="canvas" className="w-[18rem] h-[18rem]"></canvas>
}

export default CanvasComponet