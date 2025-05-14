import React, { useEffect, useState } from 'react'

function Button({text, isFilled}) {
    const [filled, setFilled] = useState()
    
    useEffect(()=> {
        if(isFilled != null){
            setFilled(isFilled)
        }
    }, [])

    return (
    <div className={`button ${(filled) ? 'filledButton' : 'emptyButton'}`}>
        {(text) ? text : "Button"}
    </div>
  )
}

export default Button