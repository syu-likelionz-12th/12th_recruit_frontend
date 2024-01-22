import React, { useState, useEffect } from 'react';
import './CounterComponent.css'; // 스타일 파일 import

const CounterComponent = () => {
  const targetNumbers = [11, 10000, 65];
  const [counts, setCounts] = useState([0, 0, 0]);
  const [countLabels, setCountLabels] = useState(["년", "명", "개"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeouts = targetNumbers.map((_, index) =>
      setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < targetNumbers[index]) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      },80)
    );

    return () => {
      timeouts.forEach((intervalId) => clearInterval(intervalId));
    };

  }, [targetNumbers]);

  useEffect(() => {
    if (counts[currentIndex] === targetNumbers[currentIndex]) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % targetNumbers.length);
    }
  }, [counts, currentIndex, targetNumbers]);

  return (
    
      <div className="maincontent">
      <h3 className='intro'>
        <span className='i-box'>
          <p className='i-text'>국내 최대 규모 IT 창업 동아리 멋쟁이 사자처럼</p>
        </span>

      </h3>
      <span className='y-box'>
        <p className='text'>시작된지 <p className='bar1'></p><h2 className='num'>{counts[0]}{counts[0] === targetNumbers[0] && <span>년</span>}</h2></p>
      </span>

      <span className='s-box'>
    
      <p className='intro-text'> 멋사 대학 출신 학생 수 <p className='bar2'></p> <h2 className='num'>{counts[1]} {counts[1] === targetNumbers[1] && <span>+</span>}</h2></p>
        
      </span>

      <span className='u-box'>
      <p className='text'>2024 함께하는 대학 수  <p className='bar3'></p> <h2 className='num'>{counts[2]}{counts[2] === targetNumbers[2] && <span>?</span>}</h2> </p>  
      </span>

    </div>



  
  );
};

export default CounterComponent;
