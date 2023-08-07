'use client'
import React from 'react'
import st from './Contact.module.css'
import Whatsapp from '../../../../components/svgIcons/Whatsapp'
import DefButton from '@/components/defButton/DefButton'
import { motion } from "framer-motion";

const Contact = ({language}) => {

    const OpenWhatsapp = () => {
        const message = encodeURIComponent('Hola Santiago ...')
        window.location.href = `https://api.whatsapp.com/send?text=${message}&phone=+54${3814015520}`
    }

  return (
    <motion.div 
        initial={{ scale: 0.8, opacity:0 }}
        animate = {{ scale: 1, opacity:1 }}
        className={st.container}
    >
        <form 
            action="https://formsubmit.co/santiagolizardomail@gmail.com" 
            method="POST" 
        >
            <label className={st.span}>{language === 'es' ? 'mensaje' : 'message' }</label>
            <textarea className={st.textarea} cols="30" rows="10"></textarea>
            <label className={st.span}>{language === 'es' ? 'correo' : 'e-mail' }</label>
            <input className={st.email} type="text"/>
            <motion.div type="submit" className={st.sendButtonContainer} whileTap={{scale: 0.95}} whileHover={{scale: 1.01}}>
                <DefButton title={language === 'es' ? 'Enviar' : 'Send' } click={()=>{}}/>
            </motion.div>
            </form>
        <div className={st.social}>
            <motion.button 
                className={st.iconButton} 
                whileTap={{scale: 0.95,rotate: -3}} 
                whileHover={{scale: 1.1}}
                onClick={OpenWhatsapp}
                
            >
                <i><Whatsapp height={'100%'} width={'100%'} color={'white'}/></i>
            </motion.button>
        </div>
    </motion.div>
  )
}

export default Contact