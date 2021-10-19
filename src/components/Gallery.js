import React from 'react'

// import Container from '@mui/material/Container'
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
import { Typography, Card, Grid, Container } from '@mui/material'

export default function Gallery({ images, loading }) {
    if (loading) return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Loading data...
            </Typography>
        </Container>
    )

    else if ( images.length == 0 ) return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Gallery is empty
            </Typography>
        </Container>
    )

    return (
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
    )
}