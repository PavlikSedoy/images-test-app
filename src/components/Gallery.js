import React from 'react'

import { Typography, Card, Grid, Container, CardMedia, Button } from '@mui/material'

export default function Gallery({ images, loading, handleRemove }) {
    // const [currentImages, setCurrentImages] = 

    if (loading) return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Loading data...
            </Typography>
        </Container>
    )

    else if ( images.length === 0 ) return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Gallery is empty
            </Typography>
        </Container>
    )

    const handleRemoveImg = id => {
        handleRemove(id)
    }

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {images.map((image, key) => (
                    <Grid item key={image.id} xs={12} sm={6} md={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            sx={{
                            }}
                            image={image.thumbnailUrl}
                            alt={image.title}
                        />
                        <Button variant="outlined" color="error" onClick={() => handleRemoveImg(image.id)}>
                            Remove
                        </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
