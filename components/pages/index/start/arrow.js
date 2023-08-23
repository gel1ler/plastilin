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
                transform: `translateY(-50%) ${left ? 'rotate(-180deg)' : null}`,
                transition: 'all .3s ease-out',
                opacity: active ? 1 : 0.4,
                ':hover': {
                    right: active ? right ? 0 : null : null,
                    left: active ? left ? 0 : null : null,
                }
            }}
        >
            <Image
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