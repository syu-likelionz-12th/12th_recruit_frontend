import React, { useEffect } from 'react';

const FAQ = () => {
    useEffect(() => {
        
        const script = document.createElement("script");
        script.innerHTML = `         
        $(".que").click(function() {
        $(this).next(".anw").stop().slideToggle(300);
        $(this).toggleClass('on').siblings()
        });
    `;
        script.type = "text/javascript";
        document.body.appendChild(script);
    }, []);
    return(
        <>
<p class="FAQ-Title">FAQ</p>
    <p class="FAQ-Subtitle">자주 묻는 질문</p>
    
    <div class="FAQ">
    <div id="Accordion_wrap">
    <div class="qna-box">
        <div class="que">
            <span>코딩 경험이 없어도 지원할 수 있나요?</span>
            <div class="arrow-wrap">
                <span class="arrow-top">↑</span>
                <span class="arrow-bottom">↓</span>
            </div>
        </div>
        <div class="anw">
            <span>물론입니다. 코딩이나 디자인에 대한 경험이 없어도, 열정과 성장에 대한 의지만 있다면 지원 가능합니다.<br />
                삼육멋사는 새로운 도전에 열려 있는 마음과 원동력을 가진 분들을 기다리고 있어요!</span>
        </div>
    </div>

    <div class="qna-box">
        <div class="que">
            <span>2학기에도 모집하나요?</span>
            <div class="arrow-wrap">
                <span class="arrow-top">↑</span>
                <span class="arrow-bottom">↓</span>
            </div>
        </div>
        <div class="anw">
            <span>멋쟁이사자처럼은 1년 단위로 활동하므로 2학기에는 모집하지 않습니다.</span>
        </div>
    </div>

    <div class="qna-box">
        <div class="que">
            <span>지원 결과는 어떻게 확인하나요?</span>
            <div class="arrow-wrap">
                <span class="arrow-top">↑</span>
                <span class="arrow-bottom">↓</span>
            </div>
        </div>
        <div class="anw">
            <span>지원시 작성해주신 이메일 주소로 결과 안내 메일을 보내드립니다.</span>
        </div>
    </div>

    <div class="qna-box">
        <div class="que">
            <span>학년 제한이 있나요?</span>
            <div class="arrow-wrap">
                <span class="arrow-top">↑</span>
                <span class="arrow-bottom">↓</span>
            </div>
        </div>
        <div class="anw">
            <span>학년 제한은 없습니다. 하지만 1년 단위로 활동하기에 1년 간 재학생 신분을 유지해야 합니다.</span>
        </div>
    </div>

    <div class="qna-box">
        <div class="que">
            <span>트랙간 중복지원이 가능한가요?</span>
            <div class="arrow-wrap">
                <span class="arrow-top">↑</span>
                <span class="arrow-bottom">↓</span>
            </div>
        </div>
        <div class="anw">
            <span>트랙간 중복지원은 절대 불가합니다. 중복 지원자의 경우 지원 내역 모두 무효처리됩니다.</span>
        </div>
    </div>

    <div class="qna-box">
        <div class="que">
            <span>언어모델 생성형 AI를 사용해 자기소개서를 작성해도 되나요?</span>
            <div class="arrow-wrap">
                <span class="arrow-top">↑</span>
                <span class="arrow-bottom">↓</span>
            </div>
        </div>
        <div class="anw">
            <span>삼육대학교 멋쟁이사자처럼 운영진은 생성형 AI 모델의 결과와 모든 지원 서류 내용을 철저하게 대조하여 평가합니다.<br />
                만일 유사한 내용이 발견될 경우, 이를 평가에 반영할 예정입니다. 따라서 자기소개서는 반드시 지원자 개인이 직접 개인의 손으로 작성하여 주시길 바립니다.</span>
        </div>
        </div>
    </div>
    </div>
        </>
    );
};

export default FAQ;

