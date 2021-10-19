import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Pagination, Container, Stack } from '@mui/material'

import Heading from './components/Heading'
import Gallery from './components/Gallery'
import Sort from './components/Sort'

export default function App() {
  const imagesPerPage = 12

  const [loading, setLoading] = useState(false),
    [images, setImages] = useState([]),
    [pagesCount, setPagesCount] = useState(0),
    [page, setPage] = useState(1),
    [galleryIds, setGalleryIds] = useState([]),
    [currentGalleryId, setCurrentGalleryId] = useState(0)

  useEffect(() => {
    setLoading(true)
    axios.get('http://jsonplaceholder.typicode.com/photos')
      .then(res => {
        res.data.length > 0 && setImages(res.data)
        setPagesCount( Math.ceil( res.data.length / imagesPerPage ) )
        setGalleryIds(getAlbumIds(res.data))
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  // For filter
  const getAlbumIds = arr => {
    const albumIds = []
    arr.map(item => albumIds.push(item.albumId))
    
    return albumIds.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos
    })
  }

  // For pagination
  const lastImageIndex = page * imagesPerPage,
    firstImageIndex = lastImageIndex - imagesPerPage,
    filteredImages = currentGalleryId !== 0 ? images.filter(image => image.albumId === currentGalleryId) : images,
    currentPageImages = filteredImages.slice(firstImageIndex, lastImageIndex)

  // Handle methods
  const handlePaginationClick = (e, value) => {
    setPage(value)
  }

  const handleRemoveImage = id => {
    const newImages = images.filter(image => image.id !== id)
    setImages(newImages)
  }

  const handleFilterChanged = val => {
    setCurrentGalleryId(val)

    const filtered = val !== 0 ? images.filter(image => image.albumId === val) : images
    console.log(Math.ceil( filtered.length / imagesPerPage ))
    setPagesCount( Math.ceil( filtered.length / imagesPerPage ) )
  }

  return (
    <div>
      <Heading />
      <Sort currentId={currentGalleryId} ids={galleryIds} handleChanged={handleFilterChanged} />
      <Gallery images={currentPageImages} loading={loading} handleRemove={handleRemoveImage} />
      <Container sx={{ py: 8, display: 'flex', justifyContent: 'center' }} maxWidth="md">
        <Stack spacing={2}>
          <Pagination count={pagesCount} page={page} onChange={handlePaginationClick} />
        </Stack>
      </Container>
    </div>
  )
}