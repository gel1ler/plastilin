import React from 'react'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Box, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const navLinks = [
    {
        href: '#home',
        name: 'Главная'
    },
    {
        href: '#about',
        name: 'О нас'
    },
    {
        href: '#teachers',
        name: 'Педагоги'
    },
    {
        href: '#contacts',
        name: 'Контакты'
    }
]

const Menu = ({close}) => {
    const pathname = usePathname()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                py: 2,
                pl: 3,
                gap: 1
            }}
            onClick={close}
        >
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                console.log(isActive)
                return (
                    <AnchorLink offset='100' href={link.href} key={link.name} style={{ textDecoration: 'none' }}>
                        <Typography
                            variant='h4'
                            sx={{
                                color: isActive ? 'primary.main' : 'black',
                                textDecoration: isActive ? 'underline' : null
                            }}
                        >
                            {link.name}
                        </Typography>
                    </AnchorLink>
                )
            })}
        </Box>
    )
}

export default Menu