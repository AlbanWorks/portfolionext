import React from 'react'
import ImageWraper from '../../components/imageWraper/ImageWraper'
import st from './Header.module.css'

const Header = ({selectedStyle}) => {
  return (
    <header className={st.container}>
        <div className={st.frontPic}>
            {
                selectedStyle === 'nineties' ?  <ImageWraper img={"/images/ninetiesFront.jpg"}/>
                : selectedStyle === 'neobrutalism' ? <div></div>
                : <ImageWraper img={"/images/defaultFront2.jpg"}/>
            }
        </div>
        <div className={st.profileContainer}>
            <div className={st.profilePic}>
                <ImageWraper img={"/images/kara.jpg"}/>
            </div>
            <h1 className={st.title} >SANTIAGO LIZARDO</h1>
        </div>
       
    </header>
  )
}

export default Header
//