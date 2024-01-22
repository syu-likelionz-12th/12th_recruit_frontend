import React from 'react';
import logo from './img/logo.png';  // 이미지를 import
import './Introduce.css'
function Introduce() {
  return (
    <div className='intro-container'>

      <div className='head-box'>
        <h1 className='head-text'>LIKELION at SYU</h1></div>
      <div className='sub-head-box'><h2 className='sub-head'>멋쟁이사자처럼 삼육대학교</h2></div>

      <div className='intro-box'><p className='intro-text'>테크 기반의 아이디어 실현을 위한 전국 최대 규모의 대학 연합 IT 동아리로 
        전공 상관없이 다양한 전공자들이 모여 아이디어를 실현하는 
        삼육대학교 중앙동아리이자 전국 NN개의 대학과 함께하는 연합 동아리입니다.</p></div>
        <div className='logo-box'><img src={logo} alt="LIKELION Logo" className='logo'/></div>
    </div>
  );
}

export default Introduce;
