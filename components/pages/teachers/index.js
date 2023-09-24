'use client'
import React from 'react'
import Template from '../template'
import Teachers from './teachers'
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import teacher from '@/public/people/teacher.jpg'


const Index = () => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Template>
      <Box id='teachers' className='column-centered' sx={{ mt: '100px' }}>
        {isLargeScreen ?
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 5,
              px: [3,3,3]
            }}
          >
            <Typography data-aos='fade-up' variant='h4' sx={{ my: 2 }}>
              <b style={{ fontSize: '50px' }}>Педагог</b> - самая важная часть <br /> в становлении ребенка <b>личностью.</b>
            </Typography>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                minHeight: '400px'

              }}
            >
              <Image
                src={teacher}
                fill
                alt='Педагог'
                style={{
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Box>
          :
          <Box>
            <Typography textAlign='center'>
              <b style={{ fontSize: '50px' }}>Педагог</b>
            </Typography>
            <Box
              sx={{
                width: '90%',
                height: '100%',
                overflow: 'hidden',
                mx: 3,
                borderRadius: '40px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                minHeight: '70svh'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  background: `linear-gradient(to top, rgb(250, 250, 250), transparent 40%)`,
                  zIndex: -1
                }}
              />
              <Image
                src={teacher}
                fill
                alt='Педагог'
                style={{
                  objectFit: 'cover',
                  zIndex: -2
                }}
              />
              <Typography
                variant="h5"
                textAlign='center'
                sx={{ m: 2 }}
              >
                самая важная часть <br /> в становлении ребенка <b>личностью.</b>
              </Typography>
            </Box>
          </Box>
        }
        <Typography data-aos='fade-up' variant='h3' textAlign='center' sx={{ mt: '15vh' }}>Наш <b>коллектив</b></Typography>
        <Teachers />
      </Box>
    </Template>
  )
}

export default Index