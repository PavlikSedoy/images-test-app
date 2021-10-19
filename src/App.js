import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

export default function App() {
  const images = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <div>
      <h1>Gallery</h1>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {images.map(image => (
            <Grid item key={image} xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                Some image
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}