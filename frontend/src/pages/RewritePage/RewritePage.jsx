import React from 'react'
import cl from "./Rewrite.module.css"
import TextAreaLimit from '../../components/TextAreaLimit/TextAreaLimit'
import '../../app/App.css'
import InputRange from '../../components/InputRange/InputRange'
import BlueBtn from '../../UI/BlueBtn/BlueBtn'

function RewritePage() {
  return (
    <div className={`${cl.rewritePage} _container`}>
        <div className={cl.rewritePage__title}>Изменение текста с помощью ИИ</div>
        <div className={cl.rewritePage__texts}>
            <div className={cl.text_original}>
                <div className={cl.original__title}>Исходный текст</div>
                <TextAreaLimit maxLength={3000} placeHolder="Напишите сюда свой текст" height="400px"/>
            </div>
            <div className={cl.text_rewrite}>
                <div className={cl.rewrite__title}>Переписанный текст</div>
                <TextAreaLimit maxLength={3000} height="400px"/>
            </div>
        </div>
        <div className={cl.rewritePage__settings}>
          <InputRange title="Сила рерайта" minValue={0} maxValue={10}/>
          <BlueBtn>Переписать</BlueBtn>
        </div>
    </div>
  )
}

export default RewritePage