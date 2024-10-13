import { capitalizeFirstLetter } from '@/services'
import { Box, Typography } from '@mui/material'

const Item = ({ props, index }) => {
    const { time, def, activities } = props
    return (
        <Box
            bgcolor='white'
            sx={{
                minWidth: '170px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
            }}
        >
            <Typography
                sx={{
                    bgcolor: 'secondary.main',
                    width: 'fit-content',
                    py: '2px',
                    px: '8px',
                    borderRadius: '100px',
                    fontSize: '13px'
                }}
                fontWeight={600}
                variant='body2'
            >
                {time}
            </Typography>
            <Typography variant='h6' textAlign='start' sx={{ width: 'fit-content' }}>
                {capitalizeFirstLetter(def ? def : activities[index])}
            </Typography>
        </Box>
    )
}

export default Item