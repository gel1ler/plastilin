import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import MyButton from '@/components/UI/button'

const Form = ({center, m}) => {
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
            className='column-centered'
            sx={{
                gap: [2, 2, 2, 3],
                height: 'max-content',
                maxWidth: '400px',
                mx: center ? 'auto' : null,
                my: m ? 4 : 0
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
    )
}

export default Form