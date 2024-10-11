import { Box, Typography, Collapse, IconButton, List, ListItemText, Button } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Group = ({ props }) => {
    const { title, description, prices } = props;
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
                position: 'relative',
                '&:hover': {
                    backgroundColor: '#f5f5f5',
                }
            }}
            onClick={handleExpandClick}
            className='shadow'
        >


            {/* Absolutes */}
            {/* <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '40%',
                    bottom: 0,
                    transition: 'height 0.3s ease',
                    overflow: 'hidden',
                    background: 'linear-gradient(to top, #fff 20%, rgba(255,255,255,0.8), transparent)',
                    zIndex: 100
                }}
            /> */}

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 5,
                }}
            >
                <Typography variant='h5'>{title}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: [0, 2],
                            flexDirection: ['column', 'row'],
                        }}
                    >
                        < Button >
                            Подробнее
                        </Button>
                        <Button variant='contained'>
                            Рапсисание
                        </Button>
                    </Box>
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
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
                <Box sx={{ ml: 2 }}>
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