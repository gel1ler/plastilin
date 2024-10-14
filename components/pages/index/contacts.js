import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { PhoneCall } from '@/components/icons'
import Form from '@/components/UI/form'

const Contacts = () => {
  return (
    <Box
      id='contacts'
      sx={{
        display: 'grid',
        gridTemplateRows: ['2fr 1fr', '2fr 1fr', '2fr 1fr', '1fr'],
        gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr'],
        gap: '50px',
        justifyItems: 'center',
        alignItems: 'center',
        mb: '20vh',
        width: ['90%', '80%', '100%'],
        maxWidth: '1200px',
      }}
    >
      <Box
        className='column-centered'
        sx={{
          gap: 1,
          width: '100%'
        }}
      >
        <Typography data-aos='fade-right' variant='h4' textAlign='center'>Контакты</Typography>
        <Typography data-aos='fade-right' textAlign='center'>
          Номер телефона: <PhoneCall text />
        </Typography>
        <Typography data-aos='fade-right' textAlign='center' sx={{ mb: 2 }}>
          Адрес:{' '}
          <Link
            target='_blank'
            href='https://yandex.ru/maps/10750/ramenskoe/house/ulitsa_svobody_6a/Z0EYdARgSEMGQFtvfXl2dnRnYg==/?ll=38.230160%2C55.577847&utm_medium=mapframe&utm_source=maps&z=17"'
            style={{
              fontWeight: 'bold',
              textDecoration: 'underline'
            }}
          >
            г. Раменское, ул. Свободы, д. 6А
          </Link>
        </Typography>
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=12416694636"
          frameBorder={0}
          allowFullScreen={true}
          style={{
            width: '100%',
            height: '100%',
            minHeight: '40vh',
            maxHeight: '60vh',
            maxWidth: '600px',
            boxShadow: '2px 2px 10px 5px rgba(0,0,0,0.2)',
          }}
          data-aos='fade-right'
        />
      </Box>
      <Form />
    </Box >
  )
}

export default Contacts