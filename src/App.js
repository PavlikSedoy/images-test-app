import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Pagination, Container, Stack } from '@mui/material'

import Heading from './components/Heading'
import Gallery from './components/Gallery'

export default function App() {
  const imagesPerPage = 12

  const [loading, setLoading] = useState(false),
    [images, setImages] = useState([]),
    [pagesCount, setPagesCount] = useState(0),
    [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    axios.get('http://jsonplaceholder.typicode.com/photos')
      .then(res => {
        res.data.length > 0 && setImages(res.data)
        setPagesCount( Math.ceil( res.data.length / imagesPerPage ) )
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  const lastImageIndex = page * imagesPerPage,
    firstImageIndex = lastImageIndex - imagesPerPage,
    currentPageImages = images.slice(firstImageIndex, lastImageIndex)

  const handlePaginationClick = (e, value) => {
    setPage(value)
  }

  return (
    <div>
      <Heading />
      <Gallery images={currentPageImages} loading={loading} />
      <Container sx={{ py: 8, display: 'flex', justifyContent: 'center' }} maxWidth="md">
        <Stack spacing={2}>
          <Pagination count={pagesCount} page={page} onChange={handlePaginationClick} />
        </Stack>
      </Container>
    </div>
  )
}