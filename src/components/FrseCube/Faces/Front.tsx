import React, { memo } from "react";
import { FrseAvatar } from "../../FrseAvatar";
import Typewriter from "typewriter-effect";
import "./Faces.scss";

const Front: React.FC = () => {
  return (
    <div className="front-content">
      <div className="title-row">Hi, I'm Sebastian</div>
      <FrseAvatar />
      <div className="bottom-row">
        <Typewriter
          options={{
            strings: [
              "Developer",
              "UI-UX Designer",
              "Web3 Student",
              "Artist",
              "Psychology enthusiast",
              "Reader",
              "Dreamer",
              "Nerd",
              "Collector",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default memo(Front);
