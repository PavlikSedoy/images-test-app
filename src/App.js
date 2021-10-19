import React, {useState, useEffect} from 'react'

import Heading from './components/Heading'
import Gallery from './components/Gallery'

export default function App() {
  const [loading, setLoading] = useState(false),
    [images, setImages] = useState([])

  useEffect(() => {
    setLoading(true)
    
  }, [])

  return (
    <div>
      <Heading />
      <Gallery images={images} loading={loading} />
    </div>
  )
}