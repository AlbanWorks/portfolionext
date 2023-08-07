'use client'
import React,{useState} from 'react'
import st from './Options.module.css'
import Sun from '../../components/svgIcons/Sun'
import Moon from '../../components/svgIcons/Moon'

const Options = ({styleName, setStyleName, setLanguage}) => {
    const [english, setEnglish] = useState(false)
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
        {
            styleName === 'defDark' ? 
                <button className={st.button} onClick={()=>setStyleName('defLight')}>
                    <Sun height={'100%'} width={'100%'} color={'white'}/>
                </button>
            : 
                <button className={st.button} onClick={()=>setStyleName('defDark')}>
                    <Moon height={'100%'} width={'100%'} color={'black'}/>
                </button>
        }
       
    </div>
  )
}

export default Options

/*
 <button className={st.button} onClick={()=>handleLightState(!lightMode)}>
            {
                styleName === 'defDark' ? <Sun height={'100%'} width={'100%'} color={'white'}/>
                : <Moon height={'100%'} width={'100%'} color={'black'}/>
            }
        </button>
 */