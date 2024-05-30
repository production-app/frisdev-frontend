import { Stepper } from "@mantine/core";
import React, { useRef, useState } from "react";
const FloatingCard = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Default position
  const [active, setActive] = React.useState(1);

  const validate = () => {
    if ((cardRef && cardRef === null) || cardRef === undefined) {
      return;
    }
  };

  const handleMouseDown = (e: any) => {
    validate();
    setIsDragging(true);

    if (cardRef.current) {
      cardRef.current.style.cursor = "grabbing";
      cardRef.current.style.zIndex = "1000";
    }
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    validate();
    if (!isDragging) return;
    if (cardRef.current) {
      const newX = e.clientX - cardRef.current.offsetWidth / 2;
      const newY = e.clientY - cardRef.current.offsetHeight / 2;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    validate();
    setIsDragging(false);
    if (cardRef.current) {
      cardRef.current.style.cursor = "grab";
      cardRef.current.style.zIndex = "1";
    }
  };

  const handleClose = () => {
    validate();
    if (cardRef.current) {
      cardRef.current.style.display = "none";
    }
  };

  return (
    <div
      ref={cardRef}
      className="absolute bg-white shadow-2xl border border-[#eee] rounded-md z-50 overflow-hidden h-fit w-fit"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="bg-[#eee]">
        <button onClick={handleClose}>X</button>
      </div>
      <div className="p-4">
        <Stepper
          active={active}
          onStepClick={setActive}
          orientation="vertical"
          // color="#C79C30"
          color="#0c4a6e"
          radius="md"
          size="xs"
          iconSize={30}
        >
          <Stepper.Step label="Pending" />
          <Stepper.Step label="Ready" />
          <Stepper.Step label="On the way" />
        </Stepper>
      </div>
    </div>
  );
};

export default FloatingCard;
