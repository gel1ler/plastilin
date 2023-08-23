import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { what } from './data'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Things = () => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  if (isLargeScreen) {
    return (
      <Box>
        <Typography variant="h3" textAlign="center" data-aos='fade-up'>
          Пластилин <b>это</b>
        </Typography>
        <Box
          sx={{
            overflow: 'hidden',
            px: 3,
            py: 2,
            gap: 2,
            // bgcolor: 'rgb(240,240,240)',
            mx: 1,
            borderRadius: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr'
          }}
        >
          {what.map((i, key) =>
            <Box
              data-aos='fade-up'
              key={key}
              className='column-centered'
              sx={{

                // aspectRatio: '1/1',
                gap: 6,
                bgcolor: 'secondary.main',
                borderRadius: '20px',
                py: 3
              }}
            >
              <Image
                alt='Icon'
                src={i.icon}
                width={150}
                height={150}
              />
              <Typography variant='h5' textAlign='center'>
                {i.name}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    )
  }
  else {
    return (
      <Box>
        <Typography variant="h4" textAlign="center" data-aos='fade-up'>
          Пластилин <b>это</b>
        </Typography>
        <Box
          className="column-centered"
          sx={{
            overflow: 'hidden',
            px: 3,
            py: 2,
            gap: 2,
            mx: 1,
          }}
        >
          {what.map((i, key) =>
            <Box
              key={key}
              data-aos={key % 2 === 0 ? 'fade-right' : 'fade-left'}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'secondary.main',
                borderRadius: '20px',
                p: 1
              }}
            >
              <Image
                alt='Icon'
                src={i.icon}
                width={50}
                height={50}
              />
              <Typography sx={{ fontSize: 'large' }}>
                {i.name}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    )
  }
}

export default Things