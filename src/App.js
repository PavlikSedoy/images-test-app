import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Heading from './components/Heading'
import Gallery from './components/Gallery'

export default function App() {
  const [loading, setLoading] = useState(false),
    [images, setImages] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get('http://jsonplaceholder.typicode.com/photos')
      .then(res => {
        res.data.length > 0 && setImages(res.data)
        // console.log("🚀 ~ file: App.js ~ line 15 ~ useEffect ~ res", res)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <Heading />
      <Gallery images={images} loading={loading} />
    </div>
  )
}