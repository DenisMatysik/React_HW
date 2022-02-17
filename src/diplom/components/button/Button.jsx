import React from 'react'
import "./Button.css"


export default function Button({children,typeButton, variant, ...rest}) {
  return (
    <button type={typeButton === "submit" ? "submit" : "button"} 
    className={"button" +" "+ variant}
    {...rest}>
    {children}
    </button>
  )
}

export const SelectButton =()=>{
    return (
        <select className="button--secondary">
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </select>
    )
}
