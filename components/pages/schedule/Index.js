'use client'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Template from '../template';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

const Index = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof WdgMoyklass !== 'undefined') {
            WdgMoyklass["01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx"].init();
        }
    }, [pathname]);

    return (
        <Template noBg>
            <Box sx={{ p: 2, width: ['100vw', '100vw', '90vw'], mt: 12 }}>
                <div id="SiteWidgetMoyklass90671"></div>
                <Script type="text/javascript" src="https://app.moyklass.com/api/site/widget/?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx" strategy="beforeInteractive" />
            </Box>
        </Template>
    )
}

export default Index