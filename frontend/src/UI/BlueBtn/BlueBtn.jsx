import React from 'react'
import cl from "./BlueBtn.module.css"

function BlueBtn({children}) {
  return (
    <div className={cl.blueBtn}>
        <button>{children}</button>
    </div>
  )
}

export default BlueBtn