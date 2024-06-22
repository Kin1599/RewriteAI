import React, { useEffect, useRef, useState } from 'react'
import cl from "./TextAreaLimit.module.css"

function TextAreaLimit({maxLength, placeHolder, height}) {
    const [textValue, setTextValue] = useState('');
    const [currentLength, setCurrentLength] = useState(0);
    const textareaRef = useRef(null);

    useEffect(() => {
      if(textareaRef.current){
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      }
    }, [textValue])

    const handleChange = (e) => {
      setCurrentLength(e.target.value.length);
      setTextValue(e.target.value);
    }

  return (
    <div className={cl.textAreaLimit}>
        {
          maxLength && (
            <div className={cl.textAreaLimit__limit}>{currentLength}/{maxLength}</div>
          )
        }
        <textArea 
          ref={textareaRef}
          className={cl.textAreaLimit__textArea} 
          type="text" 
          maxLength={maxLength} 
          placeholder={placeHolder}
          style={{ height: height ? height : '75px' }}
          onChange={(e) => handleChange(e)}
          value={textValue}
        />
    </div>
  )
}

export default TextAreaLimit