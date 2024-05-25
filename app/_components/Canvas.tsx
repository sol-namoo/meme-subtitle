"use client";
import React, { useRef, useEffect, useState, ChangeEvent } from "react";

type CanvasProps = {
  text: string;
  style: {
    color: string;
    fontFamily: string;
    fontSize: number;
    bold: boolean;
    outline: boolean;
    textAlign: "center" | "end" | "left" | "right" | "start";
  };
};

export default function Canvas({ text, style }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(600);
  const [imageUrl, setImageUrl] = useState("");

  const handleChangeInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    files && setImageUrl(URL.createObjectURL(files[0]));
  };

  // write a text
  const writeText = () => {
    const context = canvas?.getContext("2d");
    if (context) {
      const { fontSize, fontFamily, color, textAlign } = style;

      context.beginPath();
      context.font = fontSize + "px " + fontFamily;
      context.textAlign = textAlign;
      context.fillStyle = color;
      context.fillText(text, width / 2, height / 2);
      context.stroke();
    }
  };

  useEffect(() => {
    if (canvas) {
      const context = canvas.getContext("2d");
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        context?.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [imageUrl]);

  useEffect(() => {
    writeText();
  }, [text, style]);

  return (
    <>
      <div>
        <label htmlFor="input-file">업로드</label>
        <input type="file" id="input-file" onChange={handleChangeInput} />
        <canvas ref={canvasRef} width={width} height={height} />;
      </div>
    </>
  );
}
