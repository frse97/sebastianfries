import React from "react";
import "./Faces.scss";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const ItalyFlag: React.FC = () => {
  return (
    <div className="flag-italy">
      <div className="green" />
      <div className="white" />
      <div className="red" />
    </div>
  );
};
const AustrianFlag: React.FC = () => {
  return (
    <div className="flag-austrian">
      <div className="red-first" />
      <div className="white" />
      <div className="red-second" />
    </div>
  );
};

const Left: React.FC = () => {
  return (
    <div className="left-content">
      <div className="top-row">My Life</div>
      <div className="timeline">
        <div className="first">
          <ItalyFlag />
          <div className="descr">
            <span>Initialization</span>
            <Typewriter
              options={{
                strings: [
                  "Born in Cattolica",
                  "Elementary School",
                  "Middle School",
                  "CSI Delfino Fano",
                  "1th year High-School",
                  "Friends i consider family",
                  "First Joint",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="secondary">
          <AustrianFlag />
          <div className="descr">
            <span>Bugs</span>
            <Typewriter
              options={{
                strings: [
                  "Depression",
                  "Drugs",
                  "Partys",
                  "Graduated from High-School",
                  "Military",
                  "WBI Wissensmanagement",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="third">
          <ItalyFlag />
          <div className="descr">
            <span>Refactoring</span>
            <Typewriter
              options={{
                strings: [
                  "Live alone",
                  "Homeoffice WBI",
                  "Started reading books",
                  "Started own projects",
                  "Started self-improvement",
                  "Learned to love myself",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="fourth">
          <FontAwesomeIcon icon={faEarthAmericas} />
          <div className="descr">
            <span>Roadmap</span>
            <Typewriter
              options={{
                strings: [
                  "Give value",
                  "Conquer the digital world",
                  "Be happy, smile",
                  "...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
