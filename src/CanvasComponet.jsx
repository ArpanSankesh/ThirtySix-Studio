/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import CanvasImage from "./CanvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const CanvasComponet = ({details}) => {
  
  
  const {startIndex, numImages, duration, size} = details
  const [index, setIndex] = useState({ value : startIndex})
  
  
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