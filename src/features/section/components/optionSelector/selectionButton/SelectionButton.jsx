'use client'
import React from 'react'
import st from './SelectionButton.module.css'
import { motion } from "framer-motion"

const SelectionButton = ({title, click, selected}) => {
    const variants = {
        selected: { opacity: 1 },
        noSelected: { opacity: 0.5},
    }

  return (
    <motion.button 
        className={st.button} 
        onClick={click}
        variants={variants}
        animate={selected ? "selected" : "noSelected"}
        whileHover={{ opacity:1}}
    >
        {title}
    </motion.button>
  )
}

export default SelectionButton