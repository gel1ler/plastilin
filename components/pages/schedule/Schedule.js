'use client'
import { Box, Typography, Button, Divider } from '@mui/material';
import React, { useRef, useState } from 'react';
import Item from './Item';
import { getDatesOfCurrentWeek } from '@/services';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

const Schedule = ({ lessons }) => {
    const week = getDatesOfCurrentWeek()
    const sliderRef = useRef(null)
    const [activeSlide, setActiveSlide] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
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
        <Box
            sx={{
                my: 4,
                minHeight: '50vh',
                width: '100vw',
            }}
        >
            <Box sx={{ mb: 4, position: 'relative' }}>
                <Slider ref={sliderRef} {...settings}>
                    {days.map((day, key) => (
                        <Box key={key} sx={{ textAlign: 'center' }}>
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
                                    }}
                                    onClick={() => sliderRef.current.slickNext()}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    p: 2,
                                    boxShadow: '0 0px 5px 2px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '20px',
                                    mx: 2,
                                    my: 1
                                }}
                            >
                                {lessons[key].map((lesson, lessonIndex) => (
                                    <React.Fragment key={lessonIndex}>
                                        <Item props={lesson} />
                                        {lessonIndex === lessons[key].length - 1 ? null : <Divider />}
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box >
        </Box>
    );
};

export default Schedule;