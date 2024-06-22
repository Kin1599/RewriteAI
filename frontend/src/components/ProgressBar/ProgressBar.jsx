import React from 'react'
import cl from './ProgressBar.module.css'

function ProgressBar({progressPercent}) {
  let progressClass = cl.progress; // Класс по умолчанию

  if (progressPercent >= 80) {
    progressClass += ` ${cl['high-value']}`; // Добавляем класс для высокого значения
  } else if (progressPercent >= 50) {
    progressClass += ` ${cl['medium-value']}`; // Добавляем класс для среднего значения
  } else {
    progressClass += ` ${cl['low-value']}`; // Добавляем класс для низкого значения
  }

  return (
    <div className={cl.progressBar}>
        <progress className={progressClass} max="100" min="0" value={progressPercent}>{progressPercent}%</progress>
        <div className={cl.progressBar__value}>{progressPercent}% AI/GPT</div>
    </div>
  )
}

export default ProgressBar