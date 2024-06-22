import React from 'react'
import cl from "./InputRange.module.css"

function InputRange({title, minValue, maxValue, setPowerRewrite, powerRewrite}) {
  return (
    <div className={cl.inputRange}>
        <div className={cl.inputRange__title}>{title}: {powerRewrite}/{maxValue}</div>
        <input 
            className={cl.inputRange__range}
            type="range" 
            min={minValue} 
            max={maxValue}
            value={powerRewrite}
            onChange={(e) => setPowerRewrite(e.target.value)}
        />
    </div>
  )
}

export default InputRange