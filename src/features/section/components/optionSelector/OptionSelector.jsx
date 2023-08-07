'use client'
import React from 'react'
import st from './OptionSelector.module.css'
import SelectionButton from './selectionButton/SelectionButton'
import { motion } from "framer-motion";

const optionSelector = ({options, selectedOption, select, language}) => {
   // const [selectedOption, setSelectedOption] = useState(0)
   // const options = ['Proyectos', 'Contacto', 'Efectos', 'Sobre Mi']
   /* const select = (index) => {
        setSelectedOption(index)
    }*/
    const setTitle = (opt) => {
        if(language === 'es') return opt.titleEs
        return opt.titleEn
    }
    
  return (
    <nav className={st.container}>
        <ul className={st.ul}>{
            options.map((opt, index)=>
                <li key={index}>
                    <SelectionButton title ={setTitle(opt)} click={()=>select(index)} selected={selectedOption === index}/>{
                        selectedOption === index ? <motion.div className={st.bar} layoutId={st.bar}></motion.div>:null
                    }
                </li>
            )}
        </ul>
    </nav>
  )
}

export default optionSelector