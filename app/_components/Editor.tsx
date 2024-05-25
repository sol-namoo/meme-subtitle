"use client";

import { useState } from "react";
import Canvas from "./Canvas";

export default function Editor() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState({
    color: "white",
    fontFamily: "cinema",
    fontSize: 20,
    bold: true,
    outline: true,
    textAlign: "center",
  });

  return (
    <div className="container">
      <div>
        이미지 영역
        <Canvas text={text} style={style} />
      </div>
      <div>
        편집 영역
        <div>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div>옵션 조정</div>
        <div>볼드 / 색 / 그림자 / 크기</div>
      </div>
    </div>
  );
}
