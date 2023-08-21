import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { begin as arr } from './data'

const Slider = () => {
    return (
        <Box
            sx={{
                overflowX: 'scroll',
                mt: 2,
                position: 'relative',
            }}
            data-aos='fade-up'
        >
            <Box
                sx={{
                    height: '70vh',
                    width: `${arr.length * 90}vw`,
                    display: 'flex'
                }}
            >
                {arr.map((i, key) =>
                    <Box
                        key={key}
                        sx={{
                            width: '100%',
                            overflow: 'hidden',
                            my: 1
                        }}
                    >
                        <Box
                            sx={{
                                width: '90%',
                                height: '100%',
                                overflow: 'hidden',
                                mx: 3,
                                borderRadius: '30px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: key === 0 ? 'column' : 'column-reverse',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    background: `linear-gradient(${key === 0 ? 'to bottom' : 'to top'}, rgb(250, 250, 250), transparent 30%)`,
                                    zIndex: -1
                                }}
                            />
                            <Image
                                alt='Дети'
                                fill
                                src={i.image}
                                style={{
                                    objectFit: 'cover',
                                    zIndex: -2
                                }}
                            />
                            <Typography
                                variant="h6"
                                textAlign='center'
                                sx={{ m: 2 }}
                            >
                                {i.text}
                            </Typography>
                            {i.additionalText ?
                                <Typography
                                    textAlign='center'
                                    sx={{
                                        m: 1,
                                        bgcolor: 'secondary.main',
                                        p: 1,
                                        borderRadius: '10px',
                                        width: '70%'
                                    }}
                                >
                                    {i.additionalText}
                                </Typography>
                                : null
                            }
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Slider