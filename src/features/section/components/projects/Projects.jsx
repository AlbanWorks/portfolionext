import React from 'react'
import st from './Projects.module.css'
import Project from './project/Project'
const projects = ({language}) => {
    const projectData = [
        {
            title: 'Alban Tech', 
            image : "/images/albantech.jpg", 
            descriptionEs: 'Proyecto personal, soluciones a medida para pequeñas y medianas empresas, adaptando módulos previamente creados.funciona como una suscripción mensual que incluye mantenimiento, soporte y mejora continua.',
            descriptionEn: 'Personal project, customized solutions for small and medium-sized companies, adapting previously created modules. It works as a monthly subscription that includes maintenance, support and continuous improvement.', 
            link: 'link'
        },
        {
            title: 'Repara Interno', 
            image : "/images/repara.jpg", 
            descriptionEs: 'Aplicación de gestión para un taller. Crea y organiza planillas, contacta con clientes, cotiza trabajos, tiene una lista de tareas y funciona en la nube. Al ser una PWA se puede instalar y utilizar desde el móvil.',
            descriptionEn: 'Management application for a workshop. Create and organize spreadsheets, contact clients, make budgets, have a to-do list, and it works in the cloud. is a PWA so it can be installed and used in mobile.', 
            link: 'link'
        },
        {
            title: 'Punto Repara', 
            image : "/images/puntoRepara.jpg", 
            descriptionEs: 'Ampliación de Repara, esta aplicación web puede ser usada por  cualquier persona que desee tener un “punto repara” donde puede recibir electrodomésticos rotos y derivarlos al taller central.',
            descriptionEn: 'Extension of Repara, this web application can be used by anyone who wishes to have a "Punto Pepara" where they can receive broken machines and refer them to the central workshop.', 
            link: 'link'
        },
        {
            title: 'Emisan', 
            image : "/images/emisan.jpg", 
            descriptionEs: 'Ejemplo funcional de la plantilla Tiendas, con la que se puede montar un catálogo online gestionado por el cliente que se puede compartir por redes sociales para vender productos y servicios.',
            descriptionEn: 'Functional example of the Tiendas template, with which you can set up an online catalog managed by the client that can be shared on social networks to sell products and services.', 
            link: 'link'
        },
        {
            title: 'E-Remito', 
            image : "/images/e-remito.jpg", 
            descriptionEs: 'Aplicación web para un cliente con múltiples negocios, un punto central donde los empleados pueden reportar los ingresos, egresos y facturas de cada turno y fecha. El cliente gestiona, agrega y elimina negocios y los empleados pueden usar la app desde una PC o celular',
            descriptionEn: 'Web application for a client with multiple businesses, is a central point where employees can report income, expenses and invoices for each shift and date. The client manages, adds and removes businesses and employees can use the app from a PCs or smartphones.', 
            link: 'link'
        },
        {
            title: 'Radianer', 
            image : "/images/project.jpg", 
            descriptionEs: 'Sitio web de mi proyecto Radianer, un videojuego sandbox 2D con terreno destruible en donde puedes viajar entre múltiples planetas, en este sitio capto leads, y se puede descargar el juego.',
            descriptionEn: 'Website of my project Radianer, a 2D sandbox game with destructible terrain where you can travel between multiple planets, on this site I get leads, and the game can be downloaded.', 
            link: 'link'
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

export default projects 