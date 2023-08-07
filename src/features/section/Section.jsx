"use client"
import React,{useState} from 'react'
import st from './Section.module.css'
import OptionSelector from './components/optionSelector/OptionSelector'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Aboutme from './components/aboutme/Aboutme'
import Effects from './components/effects/Effects'


const Section = ({setEffect, language}) => {
   
    const options = [
        {name: 'projects', titleEs:'Proyectos', titleEn:'Projects'},
        {name: 'effects', titleEs:'Efectos', titleEn:'Effects'},
        {name: 'contact', titleEs:'Contacto', titleEn:'Contact'},
        {name: 'aboutme', titleEs:'Sobre Mi', titleEn:'About me'}
    ]
    const [selectedOption, setSelectedOption] = useState(0)
  return (
    <section className={st.container}>
        <OptionSelector 
            options={options} 
            selectedOption={selectedOption} 
            select={(index)=>setSelectedOption(index)}
            language={language}
        />
        <div className={st.optionContainer}>
            <h3 className={st.title}>
                {
                    language === 'es' ? options[selectedOption].titleEs
                    :options[selectedOption].titleEn
                }
            </h3>
            {
              selectedOption === 0 ? <Projects  language={language}/>
              : selectedOption === 1? <Effects setEffect={(effectName)=>setEffect(effectName)}  language={language}/>
              : selectedOption === 2 ? <Contact  language={language}/>
              : selectedOption === 3 ? <Aboutme  language={language}/>
              :null
            }
        </div>
    </section>
  )
}

export default Section