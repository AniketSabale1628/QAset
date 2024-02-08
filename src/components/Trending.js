// import React from 'react'
// import './trending.css'
// import iconPark from '../assets/icon-park-outline_eyes.png'
// const trending = () => {
//   const totalQuizzes = 20; 


  

// const quizzesData = [...Array(totalQuizzes)].map((_, index) => ({
//   qnumber: 667 + index,
//   qdate: '04 Sep, 2023', 
// }));

// const quizzes = quizzesData.map((quiz, index) => (
//   <div className="qq" key={index}>
//     <div>
//       <div className="qtitle">Quiz {index + 1}</div>
//       <div className="qnumber">
//         {quiz.qnumber}
//         <span>
//           <img src={iconPark} alt={`Icon for Quiz ${index + 1}`} />
//         </span>
//       </div>
//       <div className="qdate">Created on : {quiz.qdate}</div>
//     </div>
//   </div>
// ));

// const numberOfRows = Math.ceil(totalQuizzes / 4);

// const gapBetweenQuizzes = 10; // Set the desired gap between quizzes in pixels

// const rows = [...Array(numberOfRows)].map((_, rowIndex) => (
//   <div className="qq-container" key={rowIndex} style={{ margin: `0 -${gapBetweenQuizzes / 2}px` }}>
//     {quizzes.slice(rowIndex * 4, (rowIndex + 1) * 4)}
//   </div>
// ));
//   return (
//     <div>
//       <div className="impressions">
//         <div className="quizecreate">
//           <div>
//             <span>12</span> Quiz <br /> Created{" "}
//           </div>
//         </div>
//         <div className="quation">
//           <div>
//             <span>110</span> questions <br /> Created{" "}
//           </div>
//         </div>
//         <div className="total">
//           {" "}
//           <div>
//             <span>989</span> Total <br /> Impressions{" "}
//           </div>
//         </div>
//       </div>

//       <div className="box">
//         <h1 className="quiztitle">Trending Quizs</h1>
//         {/* <div className='allcontent'>
//           <div className="qq">
//             <div>
//               <div className="qtitle">Quiz 1</div>
//               <div className="qnumber">
//                 667
//                 <span>
//                   <img src={iconPark} />
//                 </span>
//               </div>
//               <div className="qdate">Created on : 04 Sep, 2023</div>
//             </div>
//           </div>
//         </div> */}
//             <div className='allcontent'>
//     {rows}
//   </div>
//       </div>
//     </div>
//   );
// }

// export default trending


import React, { useState, useEffect } from 'react';
import './trending.css';
import iconPark from '../assets/icon-park-outline_eyes.png';
import axios from 'axios';

const Trending = () => {
  const [quizzesData, setQuizzesData] = useState([]);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/quiz');
        setQuizzesData(response.data.quizzes);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const quizzes = quizzesData.map((quiz, index) => (
    <div className="qq" key={index}>
      <div>
        {/* <div className="qtitle">Quiz {index + 1}</div> */}
        <div className="qnumber">
          {quiz.quizName}
        </div>
        <div className="qdate">Created on : {quiz.createdAt}</div>
      </div>
    </div>
  ));

  const totalQuizzes = quizzesData.length;
  const numberOfRows = Math.ceil(totalQuizzes / 4);
  const gapBetweenQuizzes = 10; // Set the desired gap between quizzes in pixels

  const rows = [...Array(numberOfRows)].map((_, rowIndex) => (
    <div className="qq-container" key={rowIndex} style={{ margin: `0 -${gapBetweenQuizzes / 2}px` }}>
      {quizzes.slice(rowIndex * 4, (rowIndex + 1) * 4)}
    </div>
  ));

  return (
    <div>
      <div className="impressions">
        <div className="quizecreate">
          <div>
            <span>12</span> Quiz <br /> Created{' '}
          </div>
        </div>
        <div className="quation">
          <div>
            <span>110</span> questions <br /> Created{' '}
          </div>
        </div>
        <div className="total">
          {' '}
          <div>
            <span>989</span> Total <br /> Impressions{' '}
          </div>
        </div>
      </div>

      <div className="box">
        <h1 className="quiztitle">Trending Quizzes</h1>
        <div className="allcontent">{rows}</div>
      </div>
    </div>
  );
};

export default Trending;