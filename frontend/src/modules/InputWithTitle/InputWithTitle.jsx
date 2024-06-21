import React from 'react'
import cl from "./InputWithTitle.module.css"
import TextAreaLimit from '../../components/TextAreaLimit/TextAreaLimit'

function InputWithTitle({title, maxLengthInput, placeHolderInput, heightInput}) {
  return (
    <div className={cl.inputWithTitle}>
        <div className={cl.inputWithTitle__title}>{title}</div>
        <TextAreaLimit maxLength={maxLengthInput} placeHolder={placeHolderInput} height={heightInput}/>
    </div>
  )
}

export default InputWithTitle