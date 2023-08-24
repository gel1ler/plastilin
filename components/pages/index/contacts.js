import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import MyButton from '@/components/UI/button'
import Link from 'next/link'
import { PhoneCall } from '@/components/icons'

const Contacts = () => {
  const [pName, setPName] = useState('')
  const [cName, setCName] = useState('')
  const [age, setAge] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (pName && cName && age) {
      setDisabled(false)
    }
  })


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
          <Link href='https://yandex.ru/maps/10750/ramenskoe/house/ulitsa_svobody_6a/Z0EYdARgSEMGQFtvfXl2dnRnYg==/?ll=38.230160%2C55.577847&utm_medium=mapframe&utm_source=maps&z=17"'>
            г. Раменское, ул. Свободы, д. 6А
          </Link>
        </Typography>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=38.230160%2C55.577847&mode=whatshere&whatshere%5Bpoint%5D=38.230161%2C55.577846&whatshere%5Bzoom%5D=17&z=16"
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
      <Box
        className='column-centered'
        sx={{
          gap: [2, 2, 2, 3],
          height: 'max-content',
          maxWidth: '400px'
        }}
        id='form'
      >
        <Typography data-aos='fade-up' variant='h4' textAlign='center'>Оставьте свою заявку через WhatsApp</Typography>
        <TextField
          onChange={event => setPName(event.target.value)}
          data-aos='fade-up'
          label='Ваше имя'
          sx={{
            width: '100%',
            bgcolor: 'white'
          }}
        />
        <TextField
          onChange={event => setCName(event.target.value)}
          data-aos='fade-up'
          label='Имя ребенка'
          sx={{
            width: '100%',
            bgcolor: 'white'
          }}
        />
        <TextField
          onChange={event => setAge(event.target.value)}
          data-aos='fade-up'
          type='number'
          label='Возраст ребенка'
          sx={{
            width: '100%',
            bgcolor: 'white'
          }}
        />
        <MyButton disabled={disabled} anim pName={pName} cName={cName} age={age} />
      </Box>
    </Box >
  )
}

export default Contacts