/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import CanvasImage from "./CanvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const CanvasComponet = ({details}) => {
  
  const {startIndex, numImages, duration, size, top , left , zIndex} = details
  const [index, setIndex] = useState({ value : startIndex})
  const canvasRef = useRef(null)
  
  useGSAP(() => {
    gsap.to(index,{
      value: startIndex + numImages - 1 ,
      duration:duration,
      ease:"linear",
      repeat:-1,
      onUpdate: () =>{
        setIndex({value: Math.round(index.value)})
      }
    })
  })
  useEffect(() => {
    const canvas = canvasRef.current;
    const cxt = canvas.getContext("2d")
    const img = new Image()
    img.src = CanvasImage[index.value]
    console.log('Image source:', img.src);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      cxt.drawImage(img,0,0)

    }
  }, [index] )
  
  return <canvas
  ref={canvasRef}
  id="canvas"
  style={{
    width: `${size}px`,
    height: `${size}px`
  }}
></canvas>
}

export default CanvasComponet