'use client'
import { Box, Typography, Button, Divider } from '@mui/material';
import React, { useRef, useState } from 'react';
import Item from './Item';
import { getDatesOfCurrentWeek } from '@/services';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { smallGroupLessons, bigGroupLessons } from '@/data'

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ']

const groups = {
    small: smallGroupLessons,
    big: bigGroupLessons,
}

const Schedule = () => {
    const searchParams = useSearchParams()
    const group = searchParams.get('group') || 'small'
    const validGroups = ['big', 'small']
    const validGroup = validGroups.includes(group) ? group : 'small';

    let name
    switch (validGroup) {
        case 'small':
            name = 'Ясли'
            break;
        case 'big':
            name = 'Старшая'
            break;
    }

    const week = getDatesOfCurrentWeek()
    const sliderRef = useRef(null)
    const [activeSlide, setActiveSlide] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        slidesToShow: 1,
        beforeChange: (current, next) => setActiveSlide(next),
        customPaging: (i) => {
            return (
                <Typography variant='body2' sx={{
                    mt: 4,
                    transition: 'all 0.2s ease-out',
                    color: i === activeSlide ? 'primary.main' : 'inherit',
                    fontWeight: i === activeSlide ? 'bold' : 'normal',
                    transform: i === activeSlide ? 'translateY(-10%)' : 'translateY(0%)',
                }}>
                    {days[i]}
                </Typography>
            )
        },
    };

    return (
        <Box sx={{ py: 2, width: '100vw' }}>
            <Typography textAlign='center' variant='h4' mt={10}>
                <b>Расписание {name}</b>
            </Typography>
            <Typography textAlign='center' variant='body2'>
                Листайте или нажимайте на стрелки
            </Typography>
            <Box
                sx={{
                    my: 4,
                    minHeight: '50vh',
                    width: '100vw',
                    overflowX: 'hidden'
                }}
            >
                <Box sx={{ mb: 4, position: 'relative', width: '100vw' }}>
                    <Slider ref={sliderRef} {...settings}>
                        {days.map((day, key) => (
                            <Box key={key} sx={{ textAlign: 'center' }}>

                                {/* Controls */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 3
                                    }}
                                >
                                    <Image
                                        src='/icons/arrow_black.svg'
                                        width={25}
                                        height={25}
                                        alt='prev'
                                        style={{
                                            transform: 'rotate(180deg)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => sliderRef.current.slickPrev()}
                                    />
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant='h6' fontWeight='bold'>
                                            {day}
                                        </Typography>
                                        <Typography color='GrayText'>
                                            {week[key]}
                                        </Typography>
                                    </Box>
                                    <Image
                                        src='/icons/arrow_black.svg'
                                        width={25}
                                        height={25}
                                        alt='prev'
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => sliderRef.current.slickNext()}
                                    />
                                </Box>

                                {/* Content */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        // height: '60vh',
                                        // overflowY: 'auto',
                                        // overflowX: 'hidden'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            bgcolor: 'white',
                                            width: '80%',
                                            display: 'grid',
                                            gridTemplateColumns: '1fr',
                                            mx: 2,
                                            gap: '10px',
                                            p: 2,
                                            boxShadow: '0 0px 5px 2px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '20px',
                                            maxWidth: '800px',
                                            my: 1
                                        }}
                                    >
                                        {groups[validGroup].map((lesson, lessonIndex) => (
                                            <React.Fragment key={lessonIndex}>
                                                <Item props={lesson} index={key} />
                                                {lessonIndex === groups[validGroup][key].length - 1 ? null : <Divider />}
                                            </React.Fragment>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box >
            </Box >
        </Box >
    );
};

export default Schedule;