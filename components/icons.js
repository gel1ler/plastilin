'use client'
import React from 'react'
import { Instagram, WhatsApp, Telegram, Phone, Menu } from '@mui/icons-material'
import IB from './UI/IB'

const style = { fontSize: [25, 30] }

export const InstagramIcon = () => { return (<IB><Instagram sx={style} /></IB>) }
export const WhatsAppIcon = () => { return (<IB><WhatsApp sx={style} /></IB>) }
export const TelegramIcon = () => { return (<IB><Telegram sx={style} /></IB>) }
export const PhoneIcon = () => { return (<IB><Phone sx={style} /></IB>) }
export const MenuIcon = () => { return (<IB><Menu sx={style} /></IB>) }