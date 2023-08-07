import React from 'react'
import Image from 'next/image'

const ImageWraper = ({img}) => {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative' }}>
            <Image src={img} layout='fill' style={{objectFit:'cover', objectPosition: 'top left'}}/>
    </div>
  )
}

export default ImageWraper