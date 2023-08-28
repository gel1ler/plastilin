import React from 'react'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Box, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = ({ close, main }) => {
    const navLinks = main ?
        [
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
            },
            {
                href: '/groups',
                name: 'Группы'
            }
        ]
        :
        [
            {
                href: '/',
                name: 'Главная'
            },
            {
                href: '/groups',
                name: 'Группы'
            }
        ]

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
                return (
                    link.href[0] === '/' ?
                        <Link href={link.href} key={link.name}>
                            <Typography
                                variant='h4'
                                sx={{
                                    color: 'black',
                                    textDecoration: null
                                }}
                            >
                                {link.name}
                            </Typography>
                        </Link>
                        :
                        <AnchorLink offset='100' href={link.href} key={link.name} style={{ textDecoration: 'none' }}>
                            <Typography
                                variant='h4'
                                sx={{
                                    color: 'black',
                                    textDecoration: null
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