import certification from './img/certification.png'
import id from './img/id.png'
import book from './img/book.png'
import school from './img/school.png'
import yop from './img/yop.png'
import lamp from './img/lamp.png'
import community from './img/community.png'
import './BenefitLists.css'


function BenefitLists() {

    return(
        <div className='container'>
            <div className='headbox'>
            <h1 className='headline'>멋쟁이사자처럼 삼육대학교에서 
        <br></br>다양한 혜택을 드려요!</h1>
</div>
            
            <div className='box1-1'>
                <div className='text1-box'>
                <p className='text1'>멋쟁이사자처럼의
                 ‘TECHIT’ <br></br>무료 강의 수강</p>
                 </div>
                <div className='i-box1'>
                <img src={yop}></img>
                
            </div>
            </div>
            

            
            <div className='box1-2'>
                <div className='text2-box'>
                <p className='text2'>웹 서비스 기초부터<br></br>심화 교육까지</p>
                </div>
                <div className='i-box2'>
            <img src={book}  ></img>
            </div>
            </div>
           

          
            
            <div className='box2'>
            <div className='text3-box'>
                <p className='text3'>전국 연합 해커톤<br></br>전국 아이디어톤 참여</p>
            <div className='i-box3'>
            <img src={lamp}></img>
            </div>
            </div>
            </div>
           

            <div>
            <div className='box3'>
            <div className='text4-box'>
                <p className='text4'>기획.디자인/ <br></br>프론트엔드 /<br></br>백엔드 트랙별 교육</p>
            <div className='i-box4'>
            <img src={certification}></img>
            </div>
            </div>
            </div>
            </div>


            
            <div className='box2-1'>
            <div className='text5-box'>
                <p className='text5'>타 대학과의 교류</p>
                </div>
            <div className='i-box5'>
            <img src={school}></img>
            </div>
            </div>
            
            

            
            <div className='box1-3'>
            <div className='text6-box'>
                <p className='text6'>공동 개발,<br></br>팀 프로젝트 경험</p>
                </div>
            <div className='i-box6'>
            <img src={community}></img>
            </div>     
            </div>
           

            
            <div className='box1-4'>
            <div className='text7-box'>
                <p className='text7'>멋쟁이사자처럼 대학 수료증 발급</p>
            <div className='i-box7'>
            <img src={id}></img>
            
            </div>
            </div>
            </div>
            

        </div>
    )
};

export default BenefitLists;