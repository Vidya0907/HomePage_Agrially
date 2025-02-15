import React, { useContext, useEffect } from "react";
import "./Main.css";
import { assets } from "../../../assets/gpt/assets";
import { Context } from "../../../context/Context.jsx";

const Main = () => {
  
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);


  return (
    <div className="main">
      <div className="nav">
        <p>AgriAI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p className="tl">
                <span>Welcome to Agrially's Chat Assistant!</span>
              </p>
              <p>
                How can I assist you with your farming or gardening needs today?
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest helpful tips for growing organic tomatoes</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Summarize the best practices for crop rotation</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm ideas for sustainable farming practices</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Provide advice on preventing plant diseases in cucumbers</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />

              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask me anything about your plants!"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Please note that the information provided may not always be
            accurate. Always cross-check for critical information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
