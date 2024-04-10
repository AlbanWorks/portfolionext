'use client'
import React from 'react'
import st from './Aboutme.module.css'
import { motion } from "framer-motion";
import Github from '../../../../components/svgIcons/Github';
import ImageWraper from '@/components/imageWraper/ImageWraper';
import DescriptionEs from './components/DescriptionEs';
import DescriptionEn from './components/DescriptionEn';
import Whatsapp from '@/components/svgIcons/Whatsapp';
import Linkedin from '@/components/svgIcons/Linkedin';

const Aboutme = ({language}) => {

const openLink = (link) => {
    window.open(link)
}
    
    return (
        <motion.div 
            initial={{ scale: 0.8, opacity:0 }}
            animate = {{ scale: 1, opacity:1 }}
            className={st.container}
        >
            <div className={st.textBlock}>
                <h2 className={st.title}>Santiago Lizardo</h2>
                {
                    language === 'es' ?
                        <DescriptionEs/>
                    :
                        <DescriptionEn/>
                }
            </div>
            <div className={st.pictureAndRepoBlock}>
                <div className={st.imgContainer}>
                    <ImageWraper img={'/images/myPic.jpg'}/>
                </div>
                <div className={st.repoContainer}>
                    <motion.button  
                        className={st.iconButton} 
                        whileTap={{scale: 0.95,rotate: -5}} 
                        whileHover={{rotate: -2}}
                        onClick={()=>openLink('https://github.com/AlbanWorks')}
                    >
                        <Github height={'32px'} width={'32px'} color={'white'}/>
                    </motion.button >
                    <motion.button  
                        className={st.iconButton} 
                        whileTap={{scale: 0.95,rotate: -5}} 
                        whileHover={{rotate: -2}}
                        onClick={()=>openLink('https://www.linkedin.com/in/santiliz/')}
                    >
                        <Linkedin height={'30px'} width={'30px'} color={'white'}/>
                    </motion.button >
                    <motion.button  
                        className={st.iconButton} 
                        whileTap={{scale: 0.95,rotate: -5}} 
                        whileHover={{rotate: -2}}
                        onClick={()=>openLink('https://api.whatsapp.com/send?text=&phone=543814015520')}
                    >
                        <Whatsapp height={'35px'} width={'35px'} color={'white'}/>
                    </motion.button >
                </div>
            </div>
        </motion.div>
    )
}

export default Aboutme

/*
 <p className={st.paragraph}>{language === 'es' ? aboutmeEs : aboutmeEn}</p>
        <div className={st.paragraph}>
            <h5>Repo</h5>
            <motion.button  className={st.iconButton} whileTap={{scale: 0.95,rotate: -5}} whileHover={{rotate: -2}}>
                <i><Github height={'100%'} width={'100%'} color={'white'}/></i>
            </motion.button >
        </div>
*/