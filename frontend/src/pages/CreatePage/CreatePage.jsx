import React from 'react'
import cl from "./CreatePage.module.css"
import '../../app/App.css'
import TextAreaLimit from '../../components/TextAreaLimit/TextAreaLimit'
import InputWithTitle from '../../modules/InputWithTitle/InputWithTitle'
import InputNumber from '../../components/InputNumber/InputNumber'
import BlueBtn from '../../UI/BlueBtn/BlueBtn'
import WhiteBtn from '../../UI/WhiteBtn/WhiteBtn'
import ResponseFrame from '../../components/ResponseFrame/ResponseFrame'

function CreatePage({createText}) {
  return (
    <div className={`${cl.createPage} _container`}>
      <div className={cl.createPage__title}>Создание текста с помощью ИИ</div>
      <div className={cl.createPage__inputs}>
        <TextAreaLimit maxLength={150} placeHolder="Введите запрос для Вашего текста" height="200px"/>
        <div className={cl.createPageInputs__input}>
          <InputWithTitle 
            title="Укажите тему текста" 
            maxLengthInput={75} 
            placeHolderInput="Напишите на какую тему Вам нужен текст"
            heightInput="100px"
          />
        </div>
        <div className={cl.createPageInputs__settings}>
          <div className={cl.createPageInputsSettings__countSymbol}>
            <div className={cl.countSymbol__title}>Количество символов в строке</div>
            <InputNumber value={2000}/>
          </div>
          <InputWithTitle
            title="Тональность текста"
            placeHolderInput="Например: формальный, дружеский, агрессивный, дружелюбный"
          />
        </div>
        <div className={cl.createPageInputs__input}>
          <InputWithTitle
            title="Ключевые слова"
            placeHolderInput="Введите ключевые слова, которые необходимо использовать"
          />
        </div>
      </div>
      <BlueBtn>{createText ? "Перегенерировать" : "Сгенерировать"}</BlueBtn>
      {
        createText && (
          <div className={cl.createPage__response}>
            <div className={cl.response__title}>Ответ ИИ</div>
            <ResponseFrame value={createText}/>
            <div className={cl.response__btns}>
              <WhiteBtn>Экспорт</WhiteBtn>
              <BlueBtn>Сохранить текст</BlueBtn>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CreatePage