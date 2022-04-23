import React from "react";
import "./MovingEyes.scss";

const MovingEyes: React.FC = () => {
  const handleOnMouseMove = (event: React.MouseEvent) => {
    const eyes = document.querySelectorAll(".eye");
    [].forEach.call(eyes, function (eye: HTMLElement) {
      // Get the mouse position on the horizontal axis
      let mouseX = eye.getBoundingClientRect().right;
      // If it's the left eye we need the left offset instead the right
      if (eye.classList.contains("eye-left")) {
        mouseX = eye.getBoundingClientRect().left;
      }
      let mouseY = eye.getBoundingClientRect().top;
      let radianD = Math.atan2(event.pageX - mouseX, event.pageY - mouseY);
      let rotationD = radianD * (180 / Math.PI) * -1 + 180;
      eye.style.transform = `rotate(${rotationD}deg)`;
    });
  };

  return (
    <div className="moving-eyes" onMouseMove={handleOnMouseMove}>
      <div className="container">
        <div className="eye eye-left">
          <div className="eye-inner"></div>
        </div>
        <div className="eye eye-right">
          <div className="eye-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default MovingEyes;
