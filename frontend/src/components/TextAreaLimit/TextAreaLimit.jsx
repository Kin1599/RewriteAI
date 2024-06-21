import React, { useState } from 'react'
import cl from "./TextAreaLimit.module.css"

function TextAreaLimit({maxLength, placeHolder, height}) {
    const [currentLength, setCurrentLength] = useState(0);

  return (
    <div className={cl.textAreaLimit}>
        {
          maxLength && (
            <div className={cl.textAreaLimit__limit}>{currentLength}/{maxLength}</div>
          )
        }
        <textArea 
        className={cl.textAreaLimit__textArea} 
        type="text" 
        maxLength={maxLength} 
        placeholder={placeHolder}
        style={{ height: height ? height : '75px' }}
        onChange={(e) => setCurrentLength(e.target.value.length)}/>
    </div>
  )
}

export default TextAreaLimit