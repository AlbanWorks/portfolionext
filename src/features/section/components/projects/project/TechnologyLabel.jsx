import React from 'react'
import st from './Project.module.css'

const TechnologyLabel = ({techName}) => {
  return (
    <div className={st.tech}>
        <span>{techName}</span>
    </div>
  )
}

export default TechnologyLabel