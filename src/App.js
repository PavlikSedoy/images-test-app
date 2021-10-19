import React from 'react'

import Heading from './components/Heading'
import Gallery from './components/Gallery'

export default function App() {
  const images = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <div>
      <Heading />
      <Gallery images={images} />
    </div>
  )
}