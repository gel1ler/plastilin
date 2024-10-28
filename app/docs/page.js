import React from 'react'
import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import Title from '@/components/UI/text/title'
import Template from '@/components/pages/template'

export const metadata = {
  title: 'Пластилин -  документы для зачисления',
  description: 'Детский центр в г. Раменское, Свободы 6А. Группы от 1 года и 2 месяцев. Развитие софт скилс. Опытные педагоги, которые знают, как работать с детьми нового поколения.',
}

const subscriptionDocuments = [
  '1. Договор',
  '2. Анкета',
  '3. Согласие фото видео',
  '4. Согласие на обработку данных',
  '5. Справка от педиатра о том, что ребенок может посещать',
  '6. Справка на энтеробиоз',
  '7. Копии паспорта родителей и законных представителей',
  '8. Копия свидетельства о рождении',
  '9. Аллергии',
];

const singleVisitDocuments = [
  '1. Мини анкета',
  '2. Копия паспорта родителей или законных представителей',
  '3. Согласие на фото/видео',
  '4. Согласие на обработку данных',
  '5. Аллергии',
];

export default function Page() {
  return (
    <Template>
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 1, my: 20 }}>
        <Title>
          Документы при покупке абонемента
        </Title>
        <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
          {subscriptionDocuments.map((doc, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              <Typography variant='h6'>{doc}</Typography>
            </li>
          ))}
        </ul>
        <Title>
          Документы для разовиков
        </Title>
        <ul style={{ listStyle: 'none' }}>
          {singleVisitDocuments.map((doc, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              <Typography variant='h6'>{doc}</Typography>
            </li>
          ))}
        </ul>
      </Container>
    </Template>
  )
}