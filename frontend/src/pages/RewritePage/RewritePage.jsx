import React, { useState } from 'react'
import cl from "./Rewrite.module.css"
import TextAreaLimit from '../../components/TextAreaLimit/TextAreaLimit'
import '../../app/App.css'
import InputRange from '../../components/InputRange/InputRange'
import BlueBtn from '../../UI/BlueBtn/BlueBtn'
import Service from '../../api/Service'

function RewritePage() {
  const [originalText, setOriginalText] = useState();
  const [rewriteText, setRewriteText] = useState();
  const [powerRewrite, setPowerRewrite] = useState(0);

  const uploadServer = async () => {
    const response = await Service.postData(originalText, powerRewrite);
    setRewriteText(response.text);
  }

  return ( 
    <div className={`${cl.rewritePage} _container`}>
        <div className={cl.rewritePage__title}>Изменение текста с помощью ИИ</div>
        <div className={cl.rewritePage__texts}>
            <div className={cl.text_original}>
                <div className={cl.original__title}>Исходный текст</div>
                <TextAreaLimit 
                  maxLength={3000} 
                  placeHolder="Напишите сюда свой текст" 
                  height="400px"
                  text={originalText}
                  setText={setOriginalText}
                />
            </div>
            <div className={cl.text_rewrite}>
                <div className={cl.rewrite__title}>Переписанный текст</div>
                <TextAreaLimit 
                  maxLength={3000} 
                  height="400px"
                  text={rewriteText}
                  setText={setRewriteText}
                  read={true}
                />
            </div>
        </div>
        <div className={cl.rewritePage__settings}>
          <InputRange 
            title="Сила рерайта" 
            minValue={0} 
            maxValue={10}
            setPowerRewrite={setPowerRewrite}
            powerRewrite={powerRewrite}
          />
          <BlueBtn onClick={uploadServer}>Переписать</BlueBtn>
        </div>
    </div>
  )
}

export default RewritePage