"use client";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ReactConfetti = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        tweenDuration={5500}
        recycle={false}
      />
    </>
  );
};

export default ReactConfetti;
