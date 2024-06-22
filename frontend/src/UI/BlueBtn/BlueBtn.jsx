import React from 'react'
import cl from "./BlueBtn.module.css"

function BlueBtn({children, onClick}) {
  return (
    <div className={cl.blueBtn} onClick={() => onClick()}>
        <button>{children}</button>
    </div>
  )
}

export default BlueBtn