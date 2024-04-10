import React from 'react'
import st from './Projects.module.css'
import Project from './project/Project'
const Projects = ({language}) => {
    const projectData = [
        {
            title: 'MITWallet', 
            image : "/images/mit.jpg", 
            descriptionEs: 'Landing + plataforma para MITWallet®, comparte tus datos de contacto con NFC.',
            descriptionEn: 'Landing + platform to MITWallet®, share your contact data with NFC.', 
            link: 'https://madeintuc.com',
            techs: ['Next.js','Firebase']
        },
        {
            title: 'Tucma.tv', 
            image : "/images/tucma.jpg", 
            descriptionEs: 'Sitio web para Tucma.tv, importante medio local con cientos de visitas diarias.',
            descriptionEn: 'Website to Tucma.tv, important local media with hundreds of daily visitors.', 
            link: 'https://tucma.tv',
            techs: ['HTML','CSS','Javascript']
        },
        {
            title: 'Mr Vulpini', 
            image : "/images/vulpini.jpg", 
            descriptionEs: 'Catálogo para Mr Vulpini, permite gestión de productos y venta por redes sociales',
            descriptionEn: 'Catálogo para Mr Vulpini, permite gestión de productos y venta por redes sociales', 
            link: 'https://mrvulpini-albanworks.vercel.app/',
            techs: ['Next.js','Firebase']
        },
        {
            title: 'Kalist', 
            image : "/images/kalist.jpg", 
            descriptionEs: 'Crea listas y notas, mantente productivo y sincronizado con todos tus dispositivos',
            descriptionEn: 'Crea listas y notas, mantente productivo y sincronizado con todos tus dispositivos', 
            link: 'https://kalist.vercel.app',
            techs: ['Next.js','Firebase', 'Framer Motion']
        },
        {
            title: 'Alban Tech', 
            image : "/images/albantech.jpg", 
            descriptionEs: 'Landing para Alban Tech, soluciones a medida para pequeñas y medianas empresas.',
            descriptionEn: 'Landing for Alban Tech, customized solutions for small and medium-sized companies.', 
            link: 'https://albantech.vercel.app/',
            techs: ['Next.js']
        },
        {
            title: 'Radianer', 
            image : "/images/radianer.jpg", 
            descriptionEs: 'Demo de mu videojuego sandbox 2D, explora planetas en este mundo de bloques',
            descriptionEn: 'Demo de mu videojuego sandbox 2D, explora planetas en este mundo de bloques', 
            link: '#',
            techs: ['Next.js', 'Unity', 'C#']
        },
    ]

  return (
    <div className={st.container}>{
        projectData.map((project, index)=>
            <Project data={project} key={index} language ={language}/>
        )
    }
    </div>
  )
}

export default Projects 

