'use client'
import React from 'react'
import st from './DefButton.module.css'

const DefButton = ({title , click}) => {
  return (
    <button className={st.button} onClick={click}>
        {title}
    </button>
  )
}

export default DefButton