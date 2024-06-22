import React from 'react'
import cl from './MyTextPage.module.css'
import '../../app/App'

function MyTextPage() {
  return (
    <div className={`${cl.myTextPage} _container`}>
      <div className={cl.myTextPage__title}>Мои текста</div>
    </div>
  )
}

export default MyTextPage