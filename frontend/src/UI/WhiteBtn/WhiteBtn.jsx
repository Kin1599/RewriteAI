import React from 'react'
import cl from "./WhiteBtn.module.css"

function WhiteBtn({children, onClick}) {
  return (
    <div className={cl.whiteBtn} onClick={onClick}>
        <button>{children}</button>
    </div>
  )
}

export default WhiteBtn