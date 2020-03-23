import React, { useRef, useState, useEffect } from 'react';
import './CopyableText.css';
import copyIcon from '../assets/images/copy.png';



function CopyableText({ label }) {


  const inputRef = useRef();

  const [showFeedback, setShowFeedback] = useState(false);


  useEffect(() => {

    const timeout = setTimeout(() => {
      setShowFeedback(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    }

  }, [showFeedback]);


  function copyText() {

    const copyText = inputRef.current;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyText.blur();
    setShowFeedback(true);

  }//copyText


  return (
    <div className="CopyableText">
      <b className="label">
        {showFeedback ? 'Copiato' : label}
        <input className="labelInput" ref={inputRef} type="text" value={label} readOnly={true} />
      </b>
      <div className="copyWrapper" onClick={copyText}>
        <img className="copy" src={copyIcon} alt="copy" />
      </div>
    </div>
  );

}//CopyableText

export default CopyableText;
