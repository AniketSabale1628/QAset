import React, { useState } from 'react';
import './Createq.css';
import Poll from './Poll.js';
import QA from './Qa.js';
import { useNavigate } from 'react-router-dom';

const Createq = () => {
  const [selectedType, setSelectedType] = useState('Q&A');
  const [continueClicked, setContinueClicked] = useState(false);
  const [showCreateq, setShowCreateq] = useState(true);
  const navigate = useNavigate();

  // const [str1, setstr1] = useState("jhfs");
  const [quizName, setQuizName] = useState('');

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleTypeButtonClick = (type) => {
    setSelectedType(type);
  };

  const handleCancelClick = () => {
    window.location.reload();
  };

  const handleContinueClick = () => {
    // alert(quizName);
    // alert(selectedType);
    if (quizName.trim() !== '' && selectedType !== '') {
      setContinueClicked(true);
      setShowCreateq(false);
    } else {
      alert('Please fill in all fields before continuing.');
    }
  };

  // const handleSubmit = () => {
  //   // Add logic to handle form submission and navigate to the appropriate route
  //   if (selectedType === 'Q&A') {
  //     // Add logic to handle QA submission
  //     navigate('/dashboard/qa');
  //   } else if (selectedType === 'Poll') {
  //     // Add logic to handle Poll submission
  //     navigate('/dashboard/poll');
  //   }
  // };
  const handleBlur = () => {
    console.log('Input lost focus.');
    // alert("POP")

};
const [showComponent, setShowComponent] = useState(false);


const handleCreateQuiz = async (quizData) => {
  try {
    const response = await fetch('http://localhost:4000/api/v1/user/createquiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizData),
      
    });
    
    quizData.type = selectedType;
    if (response.ok) {
      const data = await response.json();
      console.log('Quiz created successfully:', data);
    } else {
      console.error('Failed to create quiz:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating quiz:', error.message);
  }
  if (quizName.trim() !== '' && selectedType !== '') {
    setShowComponent(true);
    setContinueClicked(true);
      setShowCreateq(false);
  } else {
    // Handle validation error (e.g., show an alert or set an error state)
    alert('Please fill in all fields before continuing.');
  }
};

  return (
    <div>
      {showCreateq && !continueClicked && (
        <div className={`flexbox visible`}>
          <div className='popup'>
            <input
              className='inp'
              placeholder='Quiz name'
              value={quizName}
              onBlur={handleBlur}
              onChange={handleQuizNameChange}
            />
            <div className='type'>
              <div className='qtype'>Quiz Type</div>
              <div>
                <button
                  className={`qabtn ${selectedType === 'Q&A' ? 'selected' : ''}`}
                  onClick={() => handleTypeButtonClick('Q&A')}
                >
                  Q & A
                </button>
              </div>
              <div>
                <button
                  className={`pollbtn ${selectedType === 'Poll' ? 'selected' : ''}`}
                  onClick={() => handleTypeButtonClick('Poll')}
                >
                  Poll Type
                </button>
              </div>
            </div>

            <div className='type1'>
              <div>
                <button className='Cancel' onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
              <div>
                <button className='Continue' onClick={handleCreateQuiz}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{continueClicked && (
  <div>
    {selectedType === 'Q&A' && <QA selectedType={selectedType} quizName={quizName} handleCreateQuiz={handleCreateQuiz}/>}
    {selectedType === 'Poll' && <Poll handleCreateQuiz={handleCreateQuiz}/>}
  </div>
)}
    </div>
  );
};

export default Createq;





// // Createq.js
// import React, { useState } from 'react';
// import './Createq.css';
// import Poll from './Poll.js';
// import QA from './Qa.js';

// const Createq = () => {
//   const [quizName, setQuizName] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [showComponent, setShowComponent] = useState(false);

//   const handleQuizNameChange = (e) => {
//     setQuizName(e.target.value);
//   };

//   const handleTypeButtonClick = (type) => {
//     setSelectedType(type);
//   };



//   const handleBackClick = () => {
//     // Reset the state and go back to the initial state
//     setShowComponent(false);
//     setQuizName('');
//     setSelectedType('');
//   };

//   const handleCreateQuiz = async (quizData) => {
//     try {
//       const response = await fetch('http://localhost:4000/api/v1/user/createquiz', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(quizData),
//       });
//       quizData.type = selectedType;
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Quiz created successfully:', data);
//       } else {
//         console.error('Failed to create quiz:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error creating quiz:', error.message);
//     }
//     if (quizName.trim() !== '' && selectedType !== '') {
//       setShowComponent(true);
//     } else {
//       // Handle validation error (e.g., show an alert or set an error state)
//       alert('Please fill in all fields before continuing.');
//     }
//   };
  
//   const renderComponent = () => {
//     // Render the appropriate component based on the selected type
//     if (selectedType === 'Q&A') {
//       return <QA quizName={quizName} selectedType={selectedType} handleCreateQuiz={handleCreateQuiz} />;
//     } else if (selectedType === 'Poll') {
//       return <Poll quizName={quizName} selectedType={selectedType} handleCreateQuiz={handleCreateQuiz} />;
//     }
//     // Return null or another component if needed
//     return null;
//   };

//   return (
//     <div className='flexbox'>
//       <div className='popup'>
//         {!showComponent ? (
//           <>
//             <input
//               className='inp'
//               placeholder='Quiz name'
//               value={quizName}
//               onChange={handleQuizNameChange}
//             />
//             <div className='type'>
//               <div className='qtype'>Quiz Type</div>
//               <div>
//                 <button
//                   className={`qabtn ${selectedType === 'Q&A' ? 'selected' : ''}`}
//                   onClick={() => handleTypeButtonClick('Q&A')}
//                 >
//                   Q & A
//                 </button>
//               </div>
//               <div>
//                 <button
//                   className={`pollbtn ${selectedType === 'Poll' ? 'selected' : ''}`}
//                   onClick={() => handleTypeButtonClick('Poll')}
//                 >
//                   Poll Type
//                 </button>
//               </div>
//             </div>
//             <div className='type1'>
//               <div>
//                 <button className='Cancel'>Cancel</button>
//               </div>
//               <div>
//                 <button className='Continue' onClick={handleCreateQuiz}>
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             {renderComponent()}
//             <div className='type1'>
//               <div>
//                 <button className='Back' onClick={handleBackClick}>
//                   Back
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Createq;
