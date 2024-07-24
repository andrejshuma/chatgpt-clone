import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>ANDREJ AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          ratione dolorem iure recusandae veniam expedita, doloremque incidunt
          corrupti adipisci necessitatibus eligendi magni quas maxime.
        </h3>
        <Link to="/dashboard">Get started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/jana.png"
                  : typingStatus == "human2"
                  ? "/plav.png"
                  : "/bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human1: What should i make for lunch?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: You should make spaghetti bolognese",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: Explain the theory of relativity",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: The theory of relativity encompasses two theories of Albert Einstein: special relativity and general relativity.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span> | </span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
