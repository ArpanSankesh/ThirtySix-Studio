/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import CanvasImage from "../CanvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const CanvasComponet = ({startIndex}) => {

  const [index, setIndex] = useState({ value : startIndex})
  
  useGSAP(() => {
    gsap.to(index,{
      value: startIndex + 149,
      duration:3,
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
  
  return <canvas ref={canvasRef} id="canvas" className="w-[18rem] h-[18rem]"></canvas>
}

export default CanvasComponet