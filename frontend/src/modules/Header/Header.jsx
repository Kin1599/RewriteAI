import React from 'react'
import cl from "./Header.module.css"
import user from "../../assets/icons/user.svg"

function Header() {
  return (
    <div className={cl.header}>
        <div className={cl.header__left}>
            <div className={cl.header__logo}>Rewrite AI</div>
            <div className={cl.header__menu}>
                <div className={`${cl.menu__item} ${cl.menu__item_active}`}>Создание текста</div>
                <div className={cl.menu__item}>Рерайт текста</div>
                <div className={cl.menu__item}>Мои текста</div>
            </div>
        </div>
        <div className={cl.header__profile}>
            <div className={cl.profile__name}>Иван</div>
            <div className={cl.profile__img}>
                <img src={user} alt="profile" />
            </div>
        </div>
    </div>
  )
}

export default Header