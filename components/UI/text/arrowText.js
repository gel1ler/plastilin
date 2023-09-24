import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ArrowText = ({ variant, type, anchor, children, href }) => {
    return (
        <Link href={href} data-aos='fade-up'>
            <Typography
                variant={variant}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: anchor === 'right' ? 'row' : 'row-reverse'
                }}
            >
                {children}
                {type === 'small' ?
                    <ArrowRightAltIcon
                        sx={{
                            transform: anchor === 'right' ? null : 'scale(-1, 1)',
                        }}
                    />
                    :
                    null
                }
            </Typography>
        </Link>
    )
}

export default ArrowText