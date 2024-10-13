import { Box, Typography } from '@mui/material'

const Item = ({ props }) => {
    return (
        <Box
            bgcolor='white'
            sx={{
                minWidth: '170px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <Typography
                sx={{
                    bgcolor: 'secondary.main',
                    width: 'fit-content',
                    py: '4px',
                    px: '8px',
                    borderRadius: '100px'
                }}
                fontWeight='bold'
                variant='body2'
            >
                {props.timeFrom + '-' + props.timeTo}
            </Typography>
            <Typography variant='h6' sx={{ width: 'fit-content' }}>
                {props.name}
            </Typography>
        </Box>
    )
}

export default Item