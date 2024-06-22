import React, { useState } from 'react'
import cl from './ModalWindow.module.css'
import WhiteBtn from '../WhiteBtn/WhiteBtn'
import BlueBtn from '../BlueBtn/BlueBtn'

function ModalWindow({saveText, closeModal, text, isModal}) {
  const [title, setTitle] = useState('');
  const rootClasses = [cl.modalWindow]

  if(isModal){
    rootClasses.push(cl.active);
  }

  const handleSave = () => {
    const currentDate = new Date().toLocaleDateString();
     // Проверяем, что заголовок не пустой перед сохранением
     if (title.trim() === '') {
      alert('Введите название текста');
      return;
    }
    saveText({ title: title, date: currentDate, text: text });
    closeModal();
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.modalWindowContent}>
        <div className={cl.modalWindow__title}>Сохранение текста</div>
        <div className={cl.modalWindow__input}>
          <div className={cl.modalWindowInput__title}>Название</div>
          <input 
            className={cl.modalWindowInput__input} 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Введите название текста'
          />
        </div>
        <div className={cl.modalWindow__btns}>
            <WhiteBtn onClick={() => closeModal()}>Отмена</WhiteBtn>
            <BlueBtn onClick={() => handleSave()}>Сохранить</BlueBtn>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow