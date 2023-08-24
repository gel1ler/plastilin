import React from 'react'
import { Button } from '@mui/material'

const MyButton = ({link, pName, cName, age, disabled }) => {
    const sendMsg = () => {
        let ageText
        console.log(age)
        if (age == '1') {
            ageText = 'год'
        }
        else if (age == '2' || age == '3' || age == '4') {
            ageText = 'года'
        }
        else {
            ageText = 'лет'
        }

        const text = `Здравствуйте, меня зовут ${pName}. Моего ребенка ${cName} (${age} ${ageText}). Запишите, пожалуйста, на пробное занятие в вашем дестком центре.`
        window.open(`https://api.whatsapp.com/send?phone=+79168688788&text=${text}`, '_blank');
    }

    return (
        <Button
            disabled={disabled}
            variant='contained'
            sx={{
                p: 2,
                mb: 2,
                width: '90%',
                borderRadius: '15px'
            }}
            onClick={() => sendMsg('Hello')}
        >
            Записаться на пробное занятие
        </Button>
    )
}

export default MyButton