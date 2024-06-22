import React from 'react'
import cl from "./InputNumber.module.css"

function InputNumber({height, value, setValue}) {
  return (
    <div className={cl.inputNumber}>
        <input 
          type="number" 
          className={cl.inputNumber__input} 
          style={{height: height ? height : '75px'}} 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}

export default InputNumber