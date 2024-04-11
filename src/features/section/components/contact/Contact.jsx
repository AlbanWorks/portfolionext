'use client'
import React from 'react'
import st from './Contact.module.css'
import Whatsapp from '../../../../components/svgIcons/Whatsapp'
import DefButton from '@/components/defButton/DefButton'
import { motion } from "framer-motion";
import Linkedin from '@/components/svgIcons/Linkedin'
import Github from '@/components/svgIcons/Github'

const Contact = ({language}) => {

    const openLink = (link) => {
        window.open(link)
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
            className={st.form}
        >
            <label className={st.span}>{language === 'es' ? 'Tu mensaje' : 'Your message' }</label>
            <textarea className={st.textarea} cols="30" rows="10"></textarea>
            <label className={st.span}>{language === 'es' ? 'Tu correo electónico' : 'Your e-mail' }</label>
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
                onClick={()=>openLink('https://www.linkedin.com/in/santiliz/')}
                
            >
                <Linkedin height={'100%'} width={'100%'} color={'white'}/>
            </motion.button>
            <motion.button 
                className={st.iconButton} 
                whileTap={{scale: 0.95,rotate: -3}} 
                whileHover={{scale: 1.1}}
                onClick={()=>openLink('https://api.whatsapp.com/send?text=&phone=543814015520')}
                
            >
                <Whatsapp height={'100%'} width={'100%'} color={'white'}/>
            </motion.button>
            <motion.button 
                className={st.iconButton} 
                whileTap={{scale: 0.95,rotate: -3}} 
                whileHover={{scale: 1.1}}
                onClick={()=>openLink('https://github.com/AlbanWorks')}
            >
                <Github height={'100%'} width={'100%'} color={'white'}/>
            </motion.button>
        </div>
    </motion.div>
  )
}

export default Contact