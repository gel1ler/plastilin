import { FilterAltOutlined } from '@mui/icons-material'
import { Box, Slider, TextField, Typography } from '@mui/material'
import React from 'react'

const Filters = ({ ages, setAges }) => {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Typography
                variant='h5'
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                Фильтры
                <FilterAltOutlined />
            </Typography>
            <Slider
                min={1}
                max={14}
                step={1}
                value={ages}
                onChange={(e, newValue) => setAges(newValue)}
                component="span"
            />
            <Box className='flex justify-between gap-20'>
                <TextField
                    inputProps={{
                        style: {
                            // color: "#fffcf2"
                        }
                    }}
                    value={ages[0]}
                    color='primary'
                    onChange={e => setAges([Number(e.target.value), age[1]])}
                />
                <TextField
                    inputProps={{
                        style: {
                            textAlign: 'right',
                            // color: "#fffcf2"
                        }
                    }}
                    value={ages[1]}
                    color='primary'
                    onChange={e => setAges([age[0], Number(e.target.value)])}
                />
            </Box>
        </Box>
    )
}

export default Filters