'use client'
import React,{useState} from 'react'
import st from './Project.module.css'
import ImageWraper from '@/components/imageWraper/ImageWraper'
import { motion } from "framer-motion";

const project = ({data, language}) => {
    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: {scale: 1, opacity:1, height: "400px", position:'relative'},
        closed: {scale: 1,opacity:1 ,height: "200px", position:'relative'},
    }
  return (
    <motion.article 
        className={st.container} 
        onClick={()=>setIsOpen(!isOpen)}
        initial={{ scale: 0.8, opacity:0 }}
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        whileHover={{ scale: 1.01}}
        whileTap={{scale: 0.95,rotate: -2}}
    >
        <div className={st.imgContainer}>
        <ImageWraper img={data.image}/>
        </div>
        <div className={st.body}>
            <h5 className={st.title}>{data.title}</h5>
            <p className={st.description}>{language === 'es' ? data.descriptionEs : data.descriptionEn }</p>
            <a className={st.ancor} href="#">{language === 'es' ? 'visitar' : 'visit' }</a>
        </div>
    </motion.article>
  )
}


export default project
//// <p>{data.description}</p>  <ImageWraper img={data.image}/>