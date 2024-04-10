'use client'
import React from 'react'
import st from './Effets.module.css'
import { motion } from "framer-motion";
import DefButton from '@/components/defButton/DefButton';

const Effects = ({setEffect, language}) => {
    const effects = ['90s','Neo Brutalism', 'Default']

  return (
    <motion.div 
        initial={{ scale: 0.8, opacity:0 }}
        animate = {{ scale: 1, opacity:1 }}
        className={st.container}
    >
        {
            effects.map((effect, index)=>
                <motion.div 
                    key={index} 
                    className={st.effectButtonContainer}
                    whileTap={{scale: 0.95}} 
                    whileHover={{scale: 1.03}}
                >
                    <DefButton title={effect} click={()=>setEffect(effect)}/>
                </motion.div>
            )
           
        }
    </motion.div>
  )
}

export default Effects