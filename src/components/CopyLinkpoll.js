
import React, { useRef, useState } from 'react'
import './CopyLinkpoll.css'
const CopyLinkpoll = () => {
  const inputRef = useRef(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setLinkCopied(true);
    }
  };
  const handleInputCross=()=>{
    window.location.reload();
  }
  return (
    <div className='popupcopy'>
      <div className='congrats'>Congrats your Poll is Published!</div>
      <div className='divinpl'>
      <input
                  ref={inputRef}
                  placeholder='Your link is here'
                  className='inplink'
                  onClick={handleInputClick}
                  value={linkCopied ? 'Link copied!' : ''}
                  readOnly
                />
      </div>
      <div className='btndiv'><button onClick={handleInputClick}>Share</button></div>
 
      <div className='crossbtn'><button onClick={handleInputCross}>X</button></div>
      
    </div>
  )
}


export default CopyLinkpoll
