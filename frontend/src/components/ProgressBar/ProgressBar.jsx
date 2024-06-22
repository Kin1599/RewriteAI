import React from 'react'
import cl from './ProgressBar.module.css'

function ProgressBar() {
  return (
    <div className={cl.progressBar}>
        <progress max="100" min="0"/>
    </div>
  )
}

export default ProgressBar