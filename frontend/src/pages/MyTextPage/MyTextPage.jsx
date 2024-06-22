import React from 'react'
import cl from './MyTextPage.module.css'
import '../../app/App'
import MyTextComponent from '../../components/MyTextComponent/MyTextComponent'

function MyTextPage({texts}) {
  return (
    <div className={`${cl.myTextPage} _container`}>
      <div className={cl.myTextPage__title}>Мои текста</div>
      {
        texts 
        ?
          <div className={cl.myTextPage__texts}>
            {
              texts.map((text, index) => (
                <MyTextComponent key={index} title={text.title} date={text.date}/>
              ))
            }
          </div>
        : 
          <div>Нет документов</div>
      }
      
    </div>
  )
}

export default MyTextPage