import React from 'react'
import arrow from '../../../../public/icons/arrow.svg'
import Image from 'next/image'
import { Box } from '@mui/material'

const Arrow = ({ left, right, f, active }) => {
    return (
        <Box
            onClick={f}
            sx={{
                position: 'absolute',
                left: left ? 5 : null,
                right: right ? 5 : null,
                top: '50%',
                cursor: active ? 'pointer' : null,
                transform: left ? 'scale(-1, 1) translateY(-50%)' : 'translateY(-50%)',
                transition: 'all .3s ease-out',
                filter: 'drop-shadow(30px 10px 4px #4444dd)',
                zIndex: 100,
                opacity: active ? 1 : 0.4,
                ':hover': {
                    right: active ? right ? 0 : null : null,
                    left: active ? left ? 0 : null : null,
                }
            }}
        >
            <Image
                alt='Стрелка'
                src={arrow}
                style={{
                    height: '100px',
                    width: '100px',
                }}
            />
        </Box>
    )
}

export default Arrow