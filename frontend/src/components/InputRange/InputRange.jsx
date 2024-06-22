import React, { useState } from 'react'
import cl from "./InputRange.module.css"

function InputRange({title, minValue, maxValue}) {
    const [currentValue, setCurrentValue] = useState(0);
  return (
    <div className={cl.inputRange}>
        <div className={cl.inputRange__title}>{title}: {currentValue}/{maxValue}</div>
        <input 
            className={cl.inputRange__range}
            type="range" 
            min={minValue} 
            max={maxValue}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
        />
    </div>
  )
}

export default InputRange