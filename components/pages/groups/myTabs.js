import { Box, Typography, List, ListItemText, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'
import { data } from './index'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const MyTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange}>
                {data.map((tab, index) => (
                    <Tab key={index} label={tab.title} />
                ))}
            </Tabs>
            {data.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    <Box>
                        <Typography variant="h5">
                            {tab.title}
                        </Typography>
                        <List disablePadding>
                            {tab.description.map((desc, i) => (
                                <ListItemText key={i}>
                                    - {desc}
                                </ListItemText>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography variant="h6">
                            Стоимость:
                        </Typography>
                        <List disablePadding>
                            {tab.prices.map((price, i) => (
                                <ListItemText key={i}>
                                    * {price}
                                </ListItemText>
                            ))}
                        </List>
                    </Box>
                </TabPanel>
            ))}
        </Box>
    );
};

export default MyTabs;