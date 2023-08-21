import { Box } from '@mui/material'
import React from 'react'
import circle from '@/public/falling/circle.svg'
import redis from '@/public/falling/redis.svg'
import half from '@/public/falling/half.svg'
import Image from 'next/image'

const Element = ({ num }) => {
    const rand = max => Math.floor(Math.random() * max)
    const type = rand(3)
    const src = type === 0 ? circle :
        type === 1 ? redis :
            type === 2 ? half : null

    const left = rand(100)
    const rotate = rand(360)

    return (
        <Image
            src={src}
            alt='Падающий объект'
            className='falling'
            style={{
                left: `${left}%`,
                animationDelay: `${num == 0 ? -3 :
                    num == 1 ? -2 :
                        num}s`,
                rotate: rotate + 'deg',
                scale: 0.7
            }}
        />
    )
}

const Falling = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100vw',
                left: 0,
                top: 0,
                bottom: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: -100,
                opacity: 0.1,
            }}
        >
            {Array(60).fill(0).map((i, key) =>
                <Element key={key} num={key} />
            )}
        </Box>
    )
}

export default Falling