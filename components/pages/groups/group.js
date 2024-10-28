import { Box, Typography, Collapse, IconButton, List, ListItemText, Button } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Link from 'next/link';

const Group = ({ props }) => {
    const { title, description, prices, age, yearWord, schedule } = props;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                borderRadius: 2,
                backgroundColor: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                maxWidth: '90vw',
                position: 'relative',
                '&:hover': {
                    backgroundColor: '#f5f5f5',
                }
            }}
            onClick={handleExpandClick}
            className='shadow'
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row'],
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: [2, 2, 5],
                }}
            ><Typography variant='h5' sx={{ textAlign: ['center', 'center', 'left'] }}>
                    {title} ({age}{yearWord ? ` ${yearWord}` : ''})
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            flexDirection: 'row',
                        }}
                    >
                        <Button>
                            Подробнее
                        </Button>
                        <Link href={`/schedule?group=${schedule}`}>
                            <Button variant='contained' onClick={(e) => e.stopPropagation()}>
                                Рапсисание
                            </Button>
                        </Link>
                    </Box>
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        sx={{ display: ['none', 'block'] }}
                    >
                        <ExpandMoreIcon
                            sx={{
                                width: '24px',
                                height: '24px',
                                aspectRatio: '1/1',
                                transform: `rotate(${expanded ? '-180' : '0'}deg)`,
                                transition: 'all 0.3s ease',
                                color: 'lightgrey',
                            }}
                        />
                    </IconButton>
                </Box>
            </Box >
            <Collapse
                // collapsedSize={25}
                in={expanded}
                timeout="auto"
            >
                <Box sx={{ ml: [0, 2] }}>
                    <Typography variant='h6'>
                        Описание:
                    </Typography>
                    <List disablePadding>
                        {description.map((desc, i) => (
                            <ListItemText key={i}>
                                - {desc}
                            </ListItemText>
                        ))}
                    </List>

                    <Typography variant="h6">
                        Стоимость:
                    </Typography>
                    <List disablePadding>
                        {prices.map((price, i) => (
                            <ListItemText key={i}>
                                * {price}
                            </ListItemText>
                        ))}
                    </List>
                </Box>
            </Collapse>
        </Box >
    )
}

export default Group;