import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import MyButton from '@/components/UI/button'
import Link from 'next/link'

const Contacts = () => {
  return (
    <Box
      id='contacts'
      sx={{
        display: 'grid',
        gridTemplateRows: '2fr 1fr',
        gap: '50px',
        justifyItems: 'center',
        py: 4,
        px: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          width: '100%'
        }}
      >
        <Typography variant='h4' textAlign='center'>Контакты</Typography>
        <Typography textAlign='center'>
          Номер телефона: +7(900)000-00-00
        </Typography>
        <Typography textAlign='center' sx={{ mb: 2 }}>
          Адрес:{' '}
          <Link href='https://yandex.ru/maps/10750/ramenskoe/house/ulitsa_svobody_6a/Z0EYdARgSEMGQFtvfXl2dnRnYg==/?ll=38.230160%2C55.577847&utm_medium=mapframe&utm_source=maps&z=17"'>
            г. Раменское, ул. Свободы, д. 6А
          </Link>
        </Typography>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=38.230160%2C55.577847&mode=whatshere&whatshere%5Bpoint%5D=38.230161%2C55.577846&whatshere%5Bzoom%5D=17&z=16"
          frameborder="0"
          allowfullscreen="true"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '40vh',
            maxHeight: '60vh',
            boxShadow: '2px 2px 10px 5px rgba(0,0,0,0.2)',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          height: 'max-content'
        }}
      >
        <Typography variant='h4' textAlign='center'>Оставьте свою заявку</Typography>
        <TextField
          label='Имя'
          sx={{
            width: '100%',
          }}
        />
        <TextField
          label='Номер телефона'
          sx={{
            width: '100%',
          }}
        />
        <MyButton />
      </Box>
    </Box >
  )
}

export default Contacts