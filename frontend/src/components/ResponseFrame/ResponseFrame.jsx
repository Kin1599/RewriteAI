import React, { useEffect, useRef } from 'react'
import cl from "./ResponseFrame.module.css"

function ResponseFrame({value}) {
    const textareaRef = useRef(null);

    useEffect(() => {
        if(textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [value])

  return (
    <div className={cl.responseFrame}>
        <textarea className={cl.responseFrame__textarea} value={value} ref={textareaRef} readOnly/>
    </div>
  )
}

export default ResponseFrame