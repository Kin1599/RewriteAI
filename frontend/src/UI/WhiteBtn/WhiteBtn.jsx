import React from 'react'
import cl from "./WhiteBtn.module.css"

function WhiteBtn({children}) {
  return (
    <div className={cl.whiteBtn}>
        <button>{children}</button>
    </div>
  )
}

export default WhiteBtn