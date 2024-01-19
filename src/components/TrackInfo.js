import React from 'react';

const TrackInfo = () => {
return (
    <>
    <div className="Track-Info">
        <div className="Track-Info-Top">
        <p>멋쟁이사자처럼 삼육대학교에서<br />세분화된 트랙별 교육으로 함께 성장해요</p>
      </div>
      <div className="Track-Info-Main">
        <div className="Track-Box">
          <div className="Track-Box-Img">

          </div>
          <div className="Track-Box-Detail">
            <p className="Track-Box-Detail-Title">프론트엔드</p>
            <p className="Track-Box-Detail-Ex">
              웹 페이지의 시각적인 부분을 담당하는 프론트엔드 트랙은 HTML, CSS, JavaScript 등을 활용하여 동적이고 효과적인 화면 개발에 주력합니다. 웹 클라이언트 개발을 위한 기초부터 심화까지의 스킬을 배울 수 있습니다.
            </p>
          </div>
        </div>
        <div className="Track-Box">
          <div className="Track-Box-Img"></div>
          <div className="Track-Box-Detail">
            <p className="Track-Box-Detail-Title">기획 & UI/UX 디자인</p>
            <p className="Track-Box-Detail-Ex">
              아이디어의 시작부터 현실화까지! 기획 & 디자인 트랙은 UI/UX 디자인에 대한 깊은 이해를 통해 멋진 사용자 경험을 제공합니다. 서비스를 직접 디자인하는 것은 물론이고 서비스 구체화 방안과 디자인 방법론을 배울 수 있습니다.
            </p>
          </div>
        </div>
        <div className="Track-Box">
          <div className="Track-Box-Img"></div>
          <div className="Track-Box-Detail">
            <p className="Track-Box-Detail-Title">백엔드</p>
            <p className="Track-Box-Detail-Ex">
              사용자 눈에 보이지 않는 서버를 담당하는 백엔드 트랙은 Django, DRF, Spring 등 다양한 프레임워크를 바탕으로 서비스 운영을 위한 전체적인 인프라를 구현합니다. 서비스 구현의 API 관리부터 DB 관리까지 배울 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TrackInfo;