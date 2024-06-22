import React from 'react'
import cl from "./InputWithTitle.module.css"
import TextAreaLimit from '../../components/TextAreaLimit/TextAreaLimit'

function InputWithTitle({ title, maxLengthInput, placeHolderInput, heightInput, setValue, value }) {
    return (
        <div className={cl.inputWithTitle}>
            <div className={cl.inputWithTitle__title}>{title}</div>
            <TextAreaLimit 
                maxLength={maxLengthInput} 
                placeHolder={placeHolderInput} 
                height={heightInput} 
                setText={setValue} 
                text={value}
            />
        </div>
    )
}

export default InputWithTitle
