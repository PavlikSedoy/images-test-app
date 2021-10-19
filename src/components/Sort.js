import React from 'react'

import { Box, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material'

export default function Sort({currentId, ids, handleChanged}) {
    const handleChange = (event) => {
        handleChanged(event.target.value);
    }

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Album Id</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentId}
                        label="Album Id"
                        onChange={handleChange}
                    >
                        <MenuItem value={0}>No filter</MenuItem>
                        {ids.map(id => (
                            <MenuItem key={id} value={id}>{id}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
}
