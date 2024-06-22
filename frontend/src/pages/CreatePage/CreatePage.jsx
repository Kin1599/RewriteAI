import React, { useState } from 'react'
import cl from "./CreatePage.module.css"
import '../../app/App.css'
import TextAreaLimit from '../../components/TextAreaLimit/TextAreaLimit'
import InputWithTitle from '../../modules/InputWithTitle/InputWithTitle'
import InputNumber from '../../components/InputNumber/InputNumber'
import BlueBtn from '../../UI/BlueBtn/BlueBtn'
import WhiteBtn from '../../UI/WhiteBtn/WhiteBtn'
import ResponseFrame from '../../components/ResponseFrame/ResponseFrame'

function CreatePage({ createText, setIsModal, setCreateText }) {
    const [responseText, setResponseText] = useState("");
    const [tone, setTone] = useState("");
    const [topic, setTopic] = useState("");
    const [keyWords, setKeyWords] = useState("");
    const [countWord, setCountWord] = useState(2000);

    const openModal = () => {
        setIsModal(true);
    }

    const makeText = () => {
        setCreateText("хахаа");
    }

    return (
        <div className={`${cl.createPage} _container`}>
            <div className={cl.createPage__title}>Создание текста с помощью ИИ</div>
            <div className={cl.createPage__inputs}>
                <TextAreaLimit maxLength={150} placeHolder="Введите запрос для Вашего текста" height="200px" setText={setResponseText} text={responseText}/>
                <div className={cl.createPageInputs__input}>
                    <InputWithTitle 
                        title="Укажите тему текста" 
                        maxLengthInput={75} 
                        placeHolderInput="Напишите на какую тему Вам нужен текст"
                        heightInput="100px"
                        setValue={setTopic}
                        value={topic}
                    />
                </div>
                <div className={cl.createPageInputs__settings}>
                    <div className={cl.createPageInputsSettings__countSymbol}>
                        <div className={cl.countSymbol__title}>Количество символов в строке</div>
                        <InputNumber value={countWord} setValue={setCountWord} height="88px"/>
                    </div>
                    <InputWithTitle
                        title="Тональность текста"
                        placeHolderInput="Например: формальный, дружеский, агрессивный, дружелюбный"
                        setValue={setTone}
                        value={tone}
                    />
                </div>
                <div className={cl.createPageInputs__input}>
                    <InputWithTitle
                        title="Ключевые слова"
                        placeHolderInput="Введите ключевые слова, которые необходимо использовать"
                        setValue={setKeyWords}
                        value={keyWords}
                    />
                </div>
            </div>
            <BlueBtn onClick={makeText}>{createText ? "Перегенерировать" : "Сгенерировать"}</BlueBtn>
            {createText && (
                <div className={cl.createPage__response}>
                    <div className={cl.response__title}>Ответ ИИ</div>
                    <ResponseFrame value={createText}/>
                    <div className={cl.response__btns}>
                        <WhiteBtn>Экспорт</WhiteBtn>
                        <BlueBtn onClick={openModal}>Сохранить текст</BlueBtn>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreatePage
