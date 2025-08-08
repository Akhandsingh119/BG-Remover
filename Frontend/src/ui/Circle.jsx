import React from 'react'
import CircularGallery from '../bg/CircularGallery/CircularGallery'

function Circle() {
  return (
    

<div style={{ height: '400px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
  )
}

export default Circle