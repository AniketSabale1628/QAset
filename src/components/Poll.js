import React, { useState ,useRef  } from "react";
import "./poll.css";
import CopyLink from "./CopyLink"
import CopyLinkpoll from "./CopyLinkpoll";



const Poll = ({ selectedType, quizName }) => {

  const inputRefs = useRef([]);
  const [optionType, setOptionType] = useState("text");
  const [showInputs, setShowInputs] = useState("text");

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setOptionType(selectedOption);
    setShowInputs(selectedOption);
  };
 
  

  const handleCancelClickpop = () => {
    window.location.reload();
  };


  const [clickedButton, setClickedButton] = useState("btn1");
  const [buttonIds, setButtonIds] = useState(["btn1"]);
  const [lastAddedButton, setLastAddedButton] = useState("btn2");

  const handleButtonClick = (id) => {
    setClickedButton(id);
  };

  const handleAddOption = () => {
    const newButtonId = `btn${buttonIds.length + 1}`;
    setButtonIds([...buttonIds, newButtonId]);
    setLastAddedButton(newButtonId);
  };

  const renderInputDivs = () => {
    return buttonIds.map((id, index) => (
      <div
        key={id}
        id={`textt${index + 1}`}
        className="textt"
        style={{ display: clickedButton === id ? "block" : "none" }}
      >
        <div className="ri1">
          <input
            placeholder="Poll Question"
            className="qainput"
            onChange={handleQuistionNameChange}
          />
        </div>
      </div>
    ));
  };


  const [inputValues, setInputValues] = useState(Array(buttonIds.length).fill(''));

  const handleInputChange = (event, index) => {
    const newValue = event.target.value;
    setInputValues(prevInputValues => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = newValue;
      return newInputValues;
    });
  };


  const renderTextDivs = () => {

    
    return buttonIds.map((id, index) => (
      <div
        key={id}
        id={`text${index + 1}`} // corrected syntax for string interpolation
        className="text"
        style={{ display: clickedButton === id ? "block" : "none" }}
      >
        <div className="ri">
          <input
            className="radio"
            type="radio"
            id={`radio${index}_1`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClick(event, index)}
          />
          <input id={`input${index}_1`}  onChange={handleoptionNameChange1}/>
        </div>
        <div className="ri">
          <input
            type="radio"
            className="radio"
            id={`radio${index}_2`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClick(event, index)}
          />
          <input id={`input${index}_2`} onChange={handleoptionNameChange2}/>
        </div>
        <div className="ri">
          <input
            type="radio"
            className="radio"
            id={`radio${index}_3`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClick(event, index)}
          />
          <input id={`input${index}_3`} onChange={handleoptionNameChange3}/>
        </div>
        <div className="ri">
          <input
            type="radio"
            className="radio"
            id={`radio${index}_4`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClick(event, index)}
          />
          <input id={`input${index}_4`} onChange={handleoptionNameChange4}/>
        </div>
      </div>
    ));
  };

  const renderTextDivs1 = () => {
    return buttonIds.map((id, index) => (
      <div
        key={id}
        id={`image${index + 1}`}
        className="image"
        style={{ display: clickedButton === id ? "block" : "none" }}
      >
        {/* <div className="ri">
          
          <input type="radio" className="radio" name={`radioo${index}`} />
          <input placeholder="image" />
        </div> */}
           <div className="ri">
          <input
            className="radio"
            type="radio"
            id={`radio${index}_1`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClickimg(event, index)}
          />
          <input id={`input${index}_1`}  onChange={handleoptionNameChange1}/>
        </div>
        <div className="ri">
          <input
            type="radio"
            className="radio"
            id={`radio${index}_2`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClickimg(event, index)}
          />
          <input id={`input${index}_2`} onChange={handleoptionNameChange2}/>
        </div>
        <div className="ri">
          <input
            type="radio"
            className="radio"
            id={`radio${index}_3`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClickimg(event, index)}
          />
          <input id={`input${index}_3`} onChange={handleoptionNameChange3}/>
        </div>
        <div className="ri">
          <input
            type="radio"
            className="radio"
            id={`radio${index}_4`} // corrected syntax for string interpolation
            name={`radio${index}`} // corrected syntax for string interpolation
            onClick={(event) => handleRadioClickimg(event, index)}
          />
          <input id={`input${index}_4`} onChange={handleoptionNameChange4}/>
        </div>

      </div>
    ));
  };
  const handleRadioClick = (event, index) => {
    if (event.target) {
      const inputId = event.target.id.replace('radio', 'input');
      const input = document.getElementById(inputId);
      const textDiv = document.getElementById(`text${index + 1}`);
      const radioButtons = textDiv.querySelectorAll('.ri input[type="radio"]'); // Select all radio buttons in the textDiv
      
      radioButtons.forEach(radio => {
        const associatedInputId = radio.id.replace('radio', 'input');
        const associatedInput = document.getElementById(associatedInputId);
        if (associatedInput) {
          associatedInput.style.backgroundColor = "white";
          associatedInput.style.color = "black";
        }
      });
      
      if (input) {
        input.style.backgroundColor = "#60B84B";
        input.style.color = "white";
        if (event.target && event.target.type === 'radio') {
          const radioId = event.target.id;
          const recordId = radioId.split('_')[1];
          const valueElement = document.getElementById('value_' + recordId);
        if (valueElement) {
            const selectedValue = valueElement.textContent;
            alert('Selected value for record ID ' + recordId + ':', selectedValue);
        } else {
            alert('Element with ID "value_' + recordId + '" not found.');
        }
        }
      }
    }
  };
 
  const handleRadioClickimg = (event, index) => {
    if (event.target) {
        const inputId = `input${index + 1}_${event.target.id.split('_')[1]}`;
        const input = document.getElementById(inputId);
        const imageDiv = document.getElementById(`image${index + 1}`);
        const radioButtons = imageDiv.querySelectorAll('.ri input[type="radio"]');

        radioButtons.forEach(radio => {
            const associatedInputId = radio.id.replace('radio', 'input');
            const associatedInput = document.getElementById(associatedInputId);
            if (associatedInput) {
                associatedInput.style.backgroundColor = "white";
                associatedInput.style.color = "black";
            }
        });

        if (input) {
            input.style.backgroundColor = "#60B84B";
            input.style.color = "white";

            const radioId = event.target.id;
            const recordId = radioId.split('_')[1];
            const valueElement = document.getElementById('value_' + recordId);
            if (valueElement) {
                const selectedValue = valueElement.textContent;
                alert('Selected value for record ID ' + recordId + ': ' + selectedValue);
            } else {
                alert('Element with ID "value_' + recordId + '" not found.');
            }
        }
    }
};




  
 


  const renderTextDivs2 = () => {
    return buttonIds.map((id, index) => (
      <div
        key={id}
        id={`textAndImage${index + 1}`}
        className="textAndImage"
        style={{ display: clickedButton === id ? "block" : "none" }}
      >
        <div className="divedive">
        <input type="radio" name={`radiooo${index}`} className="radio"/>
          <input className="ip1" />
          <input className="ip2" />         
        </div>
        <div className="divedive">
        <input type="radio" name={`radiooo${index}`} className="radio"/>
          <input className="ip1" />
          <input className="ip2" />
        </div>
        <div className="divedive">
        <input type="radio" name={`radiooo${index}`} className="radio"/>
          <input className="ip1" />
          <input className="ip2" />
        </div>
        <div className="divedive">
        <input type="radio" name={`radiooo${index}`} className="radio"/>
          <input className="ip1" />
          <input className="ip2" />
        </div>
       
      </div>
    ));
  };

  const [textIds, setTextIds] = useState([
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
  ]);



  const handleRemoveOption = (idToRemove) => {
    setButtonIds((prevButtonIds) =>
      prevButtonIds.filter((id) => id !== idToRemove)
    );
    setButtonIds((prevButtonIds) =>
      prevButtonIds.map((id, index) => `btn${index + 1}`)
    );
  };











  const [selectedTime, setSelectedTime] = useState(null);

  const handleButtonClickof = (time) => {
    setSelectedTime(time);
  };
  const [continueClicked, setContinueClicked] = useState(false);
  const [quitionName, setQuationName] = useState('');
  const handleQuistionNameChange = (e) => {
    setQuationName(e.target.value);
  };
  const [O1Name, setO1Name] = useState('');
  const handleoptionNameChange1 = (e) => {
    setO1Name(e.target.value);
  };
  const [O2Name, setO2Name] = useState('');
  const handleoptionNameChange2 = (e) => {
    setO2Name(e.target.value);
  };
  const [O3Name, setO3Name] = useState('');
  const handleoptionNameChange3 = (e) => {
    setO3Name(e.target.value);
  };
  // alert(O3Name)
  const [O4Name, setO4Name] = useState('');
  const handleoptionNameChange4 = (e) => {
    setO4Name(e.target.value);
  };


  function handleContinueClickpop() {
    const inputs = document.querySelectorAll('.qainput');
    let allTextInputsFilled = true;
    console.log(dynamicValues)
    console.log(dynamicValues1)
    // alert(selectedType);
    // alert(quizName);
    // alert(quitionName);
    // alert(O1Name)
    // alert(O2Name)
    // alert(O3Name)
    // alert(O4Name)
    // alert(selectedTime)
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allTextInputsFilled = false;
            return;
        }
    });

    if (allTextInputsFilled) {
        setContinueClicked(true);
        setShowCreateq(false);
    } else {
        alert("Please fill in all question fields before continuing.");
    }
}
const [dynamicValues, setDynamicValues] = useState([{ Quizename: quizName }, { Qtype: selectedType } ]);
// const [dynamicValues1, setDynamicValues1] = useState([ { QuitionName: quitionName } , { O1Name: O1Name },{ O2Name: O2Name },{ O3Name: O3Name },{ O4Name: O4Name },{ SelectedTime: selectedTime }])
const [dynamicValues1, setDynamicValues1] = useState([
  { key: 'QuitionName', value: quitionName },
  { key: 'O1Name', value: O1Name },
  { key: 'O2Name', value: O2Name },
  { key: 'O3Name', value: O3Name },
  { key: 'O4Name', value: O4Name },
  { key: 'SelectedTime', value: selectedTime }
]);
  
const [showCreateq, setShowCreateq] = useState(true);

  return (
    
    <div className="popup-container">
       {showCreateq && !continueClicked && (
      <div className="popup1">
     
        <div className="inner-popup">
          <div className="topcontent">
            <div className="flexbtn">
              <div className="btntop">
                {buttonIds.map((id) => (
                  <div key={id} onClick={() => handleButtonClick(id)}>
                    <div id={id}>
                      <button>{id.replace("btn", "")}</button>
                      {id !== "btn1" && (
                        <div
                          className="remove"
                          onClick={() => handleRemoveOption(id)}
                        >
                          X
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {buttonIds.length < 5 && (
                  <div id="Addmore">
                    <button className="Addmore" onClick={handleAddOption}>
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div>Max 5 questions</div>
          </div>

          <div>
            {renderInputDivs()}
          </div>

          <div className="textqa">
            <div>Option Type</div>
            <label className="radio-label">
              <input
                type="radio"
                value="text"
                checked={optionType === "text"}
                onChange={handleOptionChange}
              />
              Text
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="image"
                checked={optionType === "image"}
                onChange={handleOptionChange}
              />
              Image URL
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="textAndImage"
                checked={optionType === "textAndImage"}
                onChange={handleOptionChange}
              />
              Text & Image URL
            </label>
          </div>

          <div
            style={{ display: showInputs === "text" ? "block" : "none" }} className="omg"
          >
            <div>{renderTextDivs()}</div>
            {/* <div className="timer">
      <div>TIME</div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === 'OFF' ? '#D60000' : '', color: selectedTime === 'OFF' ? 'white' : '' }}
          onClick={() => handleButtonClickof('OFF')}
        >
          OFF
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === '5 sec' ? '#D60000' : '', color: selectedTime === '5 sec' ? 'white' : '' }}
          onClick={() => handleButtonClickof('5 sec')}
        >
          5 sec
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === '10 sec' ? '#D60000' : '', color: selectedTime === '10 sec' ? 'white' : '' }}
          onClick={() => handleButtonClickof('10 sec')}
        >
          10 sec
        </button>
      </div>
    </div> */}
          </div>

          <div
            style={{ display: showInputs === "image" ? "block" : "none" }} className="omg"
          >
            {renderTextDivs1()}
            {/* <div className="timer">
      <div>TIME</div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === 'OFF' ? '#D60000' : '', color: selectedTime === 'OFF' ? 'white' : '' }}
          onClick={() => handleButtonClickof('OFF')}
        >
          OFF
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === '5 sec' ? '#D60000' : '', color: selectedTime === '5 sec' ? 'white' : '' }}
          onClick={() => handleButtonClickof('5 sec')}
        >
          5 sec
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === '10 sec' ? '#D60000' : '', color: selectedTime === '10 sec' ? 'white' : '' }}
          onClick={() => handleButtonClickof('10 sec')}
        >
          10 sec
        </button>
      </div>
    </div> */}
          </div>

          <div
            style={{ display: showInputs === "textAndImage" ? "block" : "none" }} className="omg"
          >
            {renderTextDivs2()}
            {/* <div className="timer">
      <div>TIME</div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === 'OFF' ? '#D60000' : '', color: selectedTime === 'OFF' ? 'white' : '' }}
          onClick={() => handleButtonClickof('OFF')}
        >
          OFF
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === '5 sec' ? '#D60000' : '', color: selectedTime === '5 sec' ? 'white' : '' }}
          onClick={() => handleButtonClickof('5 sec')}
        >
          5 sec
        </button>
      </div>
      <div>
        <button
          style={{ backgroundColor: selectedTime === '10 sec' ? '#D60000' : '', color: selectedTime === '10 sec' ? 'white' : '' }}
          onClick={() => handleButtonClickof('10 sec')}
        >
          10 sec
        </button>
      </div>
    </div> */}
          </div>
      

          <div className='type1'>
              <div>
                <button className='Cancel' onClick={handleCancelClickpop}>
                  Cancel
                </button>
              </div>
              <div>
                <button className='Continue' onClick={handleContinueClickpop}>
                Create Quiz
                </button>
              </div>
            </div>

            
        </div>
       


      </div>
      )}
      {continueClicked && (
  <div>
   <CopyLinkpoll/>
  </div>
)}
    </div>
  );
};
export default Poll;


