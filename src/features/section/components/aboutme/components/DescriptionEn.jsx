import React from 'react'
import st from './Descriptions.module.css'

    const DescriptionEn = () => {
        return (
            <div className={st.descriptionContainer}>
                <p className={st.paragraph}>
                    I am a <b>Full Stack Web Developer</b>, I create digital solutions, I build sites and web applications, some of my best experiences were:
                </p>
                <p className={st.paragraph}>
                    Working as a developer at <b>MadeInTuc</b>, where I led the development of the platform of its star product, <b>MITWallet</b>, a wallet that integrates NFC technology, when brought close to a smartphone, opens a website with the user's contact information similar to Linktree.
                </p>
                <p className={st.paragraph}>
                    I Develop the official website of <b>Tucma.tv</b>, an important local media that broadcasts radio programs and streams on Twitch with hundreds of daily visitors.
                </p>
                <p className={st.paragraph}>
                    I Create <b>Kalist</b>, an app to improve productivity and take notes, simple and synchronized with all your devices.
                </p>
                <p className={st.paragraph}>
                    At 19 I started programming, first video games and then web applications. I have always been interested in the creative potential of this discipline. I am open to <b>new proposals</b>, materializing ideas and facing the challenges they entail helps me grow as a developer.
                </p>
            </div>
        )
    }

export default DescriptionEn

