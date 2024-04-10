'use client'
import React from 'react'
import st from './Project.module.css'
import ImageWraper from '@/components/imageWraper/ImageWraper'
import { motion } from "framer-motion";
import TechnologyLabel from './TechnologyLabel';

const Project = ({data, language}) => {

  return (
    <div className={st.container}>
        <motion.a 
            className={st.anchor} 
            href={data.link}
            whileHover={{scale: 1.02}}
           
            whileTap={{
            rotate: 1,
            borderRadius: "30px"
            }}
        >
            <div className={st.imgContainer}>
                <ImageWraper img={data.image}/>
            </div>
            <div className={st.body}>
                <h5 className={st.title}>{data.title}</h5>
                <p className={st.description}>{language === 'es' ? data.descriptionEs : data.descriptionEn }</p>
                <div className={st.techContainer}>
                    {
                        data.techs.map((tech, index)=>
                            <TechnologyLabel key={index} techName={tech}/>
                        )
                    }
                </div>
            </div>
        </motion.a>
    </div>
  )
  
}


export default Project
////  <p className={st.description}>{language === 'es' ? data.descriptionEs : data.descriptionEn }</p>