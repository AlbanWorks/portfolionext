'use client'
import React from 'react'
import st from './Aboutme.module.css'
import { motion } from "framer-motion";
import Github from '../../../../components/svgIcons/Github';

const Aboutme = () => {

    
  return (
    <motion.div 
    initial={{ scale: 0.8, opacity:0 }}
    animate = {{ scale: 1, opacity:1 }}
    className={st.container}
    >
        <p className={st.paragraph}>
        Soy desarrollador web, me dedico a crear soluciones acompañando a mis clientes desde la fase de diseño hasta la entrada en producción, mantenimiento y mejora. Construyo sitios, aplicaciones web y PWAs. Integro en mi flujo de trabajo a diversos profesionales del diseño y programación, me gustan los desafíos y materializar nuevas ideas. <br /> <br />

        Por el momento soy freelance, pero estoy abierto a nuevas propuestas, intento mejorar y aprender cosas nuevas todos los días para crecer como desarrollador y brindar mejores soluciones a mis clientes. Me gusta integrar equipos donde poder aportar y enriquecerme de las experiencias y conocimiento de los demás. No dudes en consutarme.
        </p>
        <div className={st.paragraph}>
            <h5>Repo</h5>
            <motion.button  className={st.iconButton} whileTap={{scale: 0.95,rotate: -5}} whileHover={{rotate: -2}}>
                <i><Github height={'100%'} width={'100%'} color={'white'}/></i>
            </motion.button >
        </div>
</motion.div>
  )
}

export default Aboutme