'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { what } from '../../../../../data'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Things = () => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box>
      <Typography variant="h3" textAlign="center" data-aos='fade-up'>
        Пластилин <b>это</b>
      </Typography>
      {isLargeScreen ?
        <Box
          sx={{
            overflow: 'hidden',
            px: 3,
            py: 2,
            gap: 2,
            maxWidth: '1100px',
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
                boxShadow: '0px 0px 10px 2px rgba(0,0,0, 0.1)',
                gap: 6,
                bgcolor: 'secondary.main',
                borderRadius: '20px',
                py: 3,
                //Раскомментировать если будет наполнение для блоков
                // cursor: 'pointer',
                position: 'relative',
                transition: 'all .2s ease',
                overflow: 'hidden',
                // '&:hover': {
                //   '& .text12': {
                //     background: 'rgba(239, 218, 168, .9)',
                //     opacity: 1
                //   }
                // },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  transition: 'all .3s ease',
                }}
                className='text12'
              >
                <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
                  Подробнее
                </Typography>
              </Box>
              <Image
                alt='Иконка'
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
        :
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
                boxShadow: '0px 0px 10px 2px rgba(0,0,0, 0.1)',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'secondary.main',
                borderRadius: '20px',
                p: 1,
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <Image
                alt='Иконка'
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
      }
    </Box>
  )
}


export default Things