import React from 'react'
import ImageWraper from '../../components/imageWraper/ImageWraper'
import Image from 'next/image'
import st from './Header.module.css'

const Header = ({selectedStyle}) => {
  return (
    <header className={st.container}>
        <div className={st.frontPic}>
            {
                selectedStyle === 'nineties' ?  
                    <Image 
                        src={"/images/ninetiesFront.jpg"} 
                        alt='img' 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        style={{objectFit:'cover'}}
                    />
                : 
                    <Image 
                        src={'/images/typo3.png'} 
                        alt='img' 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        style={{objectFit:'cover'}}
                    />
            }
        </div>
        <div className={st.profileContainer}>
            <div className={st.profilePic}>
                <ImageWraper img={"/images/santiago.jpg"}/>
            </div>
            <h1 className={st.title} >SANTIAGO LIZARDO</h1>
        </div>
       
    </header>
  )
}

export default Header
