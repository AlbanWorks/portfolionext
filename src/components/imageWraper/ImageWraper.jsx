import React from 'react'
import Image from 'next/image'

const ImageWraper = ({img}) => {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative' }}>
            <Image 
            src={img} 
            alt='IMG' 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            style={{objectFit:'cover', objectPosition: 'top left'}}

            />
    </div>
  )
}

export default ImageWraper