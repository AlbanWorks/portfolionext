'use client'
import React,{useState} from 'react'
import st from './Options.module.css'
import Sun from '../../components/svgIcons/Sun'
import Moon from '../../components/svgIcons/Moon'

const Options = ({probe, setLanguage}) => {
    const [lightMode, setLightMode] = useState(false)
    const [english, setEnglish] = useState(false)

    const handleLightState = () => {
        probe(!lightMode);
        setLightMode(!lightMode)
    }
    const handleIdiom = () => {
        if(english){
            setLanguage('es')
            setEnglish(false)
        } 
        else {
           setLanguage('en')
            setEnglish(true)
        }
    }


  return (
    <div className={st.container}>
        <button className={st.button} onClick={()=>handleIdiom()} >{english ? 'EN' : 'ES'}</button>
        <button className={st.button} onClick={()=>handleLightState(!lightMode)}>
            {
                lightMode ? <Moon height={'100%'} width={'100%'} color={'black'}/>
                : <Sun height={'100%'} width={'100%'} color={'white'}/>
            }
        </button>
    </div>
  )
}

export default Options