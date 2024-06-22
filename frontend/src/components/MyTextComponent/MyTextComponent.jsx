import React from 'react'
import cl from './MyTextComponent.module.css'
import dot from '../../assets/icons/dot.svg'

function MyTextComponent({title, date}) {
  return (
    <div className={cl.myTextComponent}>
        <div className={cl.myTextComponent__info}>
            <div className={cl.info__title}>{title}</div>
            <div className={cl.info__date}>{date}</div>
        </div>
        <div className={cl.myTextComponent__btn}>
            <img src={dot} alt="dot" />
        </div>
    </div>
  )
}

export default MyTextComponent