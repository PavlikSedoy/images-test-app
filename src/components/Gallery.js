import React, {useState} from 'react'

import { Typography, Card, Grid, Container, CardMedia, Button, Modal, Box } from '@mui/material'

export default function Gallery({ images, loading, handleRemove }) {
    const [modalState, setModalState] = useState(false),
        [modalImg, setModalImg] = useState(null)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

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

    const handleCloseModal = () => {
        setModalImg(null)
        setModalState(false)
    }

    const handleOpenModal = imageUrl => {
        setModalImg(imageUrl)
        setModalState(true)
    }

    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {images.map((image, key) => (
                        <Grid item key={image.id} xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                onClick={() => handleOpenModal(image.url)}
                            >
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
            <Modal
                open={modalState}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CardMedia
                        component="img"
                        sx={{
                        }}
                        image={modalImg}
                        alt='some alt'
                    />
                </Box>
            </Modal>
        </>
    )
}
