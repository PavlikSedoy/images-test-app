
import React from 'react'

import { Box, Typography, Container } from '@mui/material'

export default function Heading() {
    return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Image Gallery
            </Typography>
        </Container>
      </Box>
    )
}
