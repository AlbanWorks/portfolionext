'use client'
import React,{useState} from 'react'
import Section from '@/features/section/Section'
import Header from '@/features/header/Header'
import Options from '@/features/options/Options'
import st from './page.module.css'
import styleEffects from '@/utils/styleEffects'

export default function Home() {
   
    const [styleName, setStyleName] = useState('defDark')
    const [language, setLanguage] = useState('es')

    const LightModeHandler = (state) => {
      if(state) setStyleName('defLight')
      else setStyleName('defDark')
    }
    const setEffect = (effectName) => {
        if(effectName === '90s') setStyleName('nineties')
        else if(effectName === 'Neo Brutalism') setStyleName('neobrutalism')
        else if(effectName === 'Pixels') setStyleName('pixels')
        else setStyleName('defDark')
    }

  return (
    <main className={st.container} style={styleEffects[styleName]}>
        <Header selectedStyle = {styleName}/>
        <Options styleName={styleName} setStyleName={(stname)=> setStyleName(stname)} setLanguage={(lang)=>setLanguage(lang)}/>
        <Section setEffect={(effectName)=>setEffect(effectName)} language={language}/>
    </main>
  )
}
