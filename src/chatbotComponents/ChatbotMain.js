import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config.js";
import MessageParser from "./MessageParsed";
import ActionProvider from "./ActionProvider.js";
import "./chatbotmain.css";
import chatbotlogo from "../img/chatbot2.jpg";

const ChatbotMain = () => {
  const [btnState, setBtnState] = useState(false);
  function handleClick(){
    setBtnState(btnState => !btnState);
    console.log(setBtnState)
  }
let toggleClassCheck = btnState? 'active': 'disactive';

  return (
    <>
      <div className="chatbotmain">
        <div className="b">
          <img
            id="bimg"
            src={chatbotlogo}
            alt="chatbotlogo"
            onClick={handleClick}
            height="100"
            width="100"
          />
        </div>
        <div
          className={`chatbot${toggleClassCheck}`}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </>
  );
};

export default ChatbotMain;
