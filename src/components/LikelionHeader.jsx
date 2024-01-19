import React from "react";
import "../App.css"

const LikelionHeader = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-top-logo">
          <img src="./img/LIKELION 12th LOGO.png" alt="" />
        </div>
        <div className="header-top-menu">
          <span>About</span>
          <span>12기 지원</span>
        </div>
      </div>
      <div className="header-main">
        <p className="slogan-main">
          Growl <span>to</span> Growth
        </p>
        <p className="slogan-sub">멋쟁이사자처럼 삼육대학교 12기와 함께해요</p>
        <div className="apply-button">
          <p>삼육멋사 12기 지원하기</p>
        </div>
        <div className="header-img">
          <img src="./img/캐릭터.gif" className="header-lion" width="700px" alt="Header Lion" />
          <img src="./img/창+발.png" width="100%" className="header-window" alt="Header Window" />
        </div>
      </div>
    </>
  );
};

export default LikelionHeader;