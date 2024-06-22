import React from 'react'
import cl from "./Header.module.css"
import user from "../../assets/icons/user.svg"
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const path = useLocation();
  return (
    <div className={cl.header}>
        <div className={cl.header__left}>
            <div className={cl.header__logo}>Rewrite AI</div>
            <div className={cl.header__menu}>
                <Link to="/">
                    <div className={`${cl.menu__item} ${path.pathname === '/' ? cl.menu__item_active : ''}`}>Создание текста</div>
                </Link>
                <Link to="/rewrite">
                    <div className={`${cl.menu__item} ${path.pathname === '/rewrite' ? cl.menu__item_active : ''}`}>Рерайт текста</div>
                </Link>
                <Link to="/texts">
                    <div className={`${cl.menu__item} ${path.pathname === '/texts' ? cl.menu__item_active : ''}`}>Мои текста</div>
                </Link>
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