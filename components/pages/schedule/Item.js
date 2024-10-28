import { capitalizeFirstLetter } from '@/services'
import { Box, Typography } from '@mui/material'

const Item = ({ props, index, lessonIndex }) => {
    const { time, def, activities } = props
    return (
        <Box
            bgcolor='white'
            sx={{
                boxShadow: '0 0px 3px 1px rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                p:2,
                pb:1,
                minWidth: '170px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: ['start', 'start', 'start', 'center'],
                gap: '8px',
            }}
        >
            <Typography
                sx={{
                    bgcolor: ['secondary.main', 'secondary.main', 'secondary.main', lessonIndex > 8 ? '#80be94' : 'secondary.main', lessonIndex > 5 ? lessonIndex > 11 ? '#d086bf' : '#80be94' : 'secondary.main'],
                    width: 'fit-content',
                    py: '2px',
                    color: ['unset', 'unset', 'unset', lessonIndex > 8 ? 'white' : 'unset', lessonIndex > 5 ? 'white' : 'unset'],
                    px: '8px',
                    borderRadius: '100px',
                    fontSize: '13px'
                }}
                fontWeight={600}
                variant='body2'
            >
                {time}
            </Typography>
            <Typography variant='h6' sx={{ width: 'fit-content', textAlign: ['start', 'start', 'start', 'center'] }}>
                {capitalizeFirstLetter(def ? def : activities[index])}
            </Typography>
        </Box >
    )
}

export default Item