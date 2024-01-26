'use client'
import { UserButton, useSession, useUser } from '@clerk/nextjs'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Schedule from './Schedule';
import Template from '../template';

function checkUserRole(session) {
    if (
        !session ||
        !session.user ||
        !session.user.organizationMemberships ||
        session.user.organizationMemberships.length === 0
    ) {
        return null; // Return null if the user is not a basic member
    }

    const organizationMemberships = session.user.organizationMemberships;

    // Loop through all organization memberships
    for (const membership of organizationMemberships) {
        if (membership.role) {
            return membership.role.toLowerCase(); // Return the role in lowercase if it exists
        }
    }

    return null; // Return null if no role is found in the memberships
}


const Index = ({ lessons }) => {
    // const { isLoaded, isSignedIn } = useUser()

    if (true) {
        return <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
            {/* <UserButton afterSignOutUrl='/' /> */}
            <Typography textAlign='center'>
                Вы не имеете доступа к этой странице
            </Typography>
        </Box>
    }

    const { session } = useSession();
    const userRole = checkUserRole(session);

    return (
        <Template noBg>
            {userRole === 'org:admin' ?
                <Box>
                    <Box sx={{ p: 2, width: '100vw' }}>
                        <UserButton afterSignOutUrl='/' />
                        <Typography textAlign='center' variant='h4' mt={10}>
                            Настройка расписания
                        </Typography>
                        <Schedule lessons={lessons} />
                    </Box>
                </Box>
                :
                <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                    <UserButton afterSignOutUrl='/' />
                    <Typography textAlign='center'>
                        Вы не имеете доступа к этой странице
                    </Typography>
                </Box>
            }
        </Template>
    )
}

export default Index