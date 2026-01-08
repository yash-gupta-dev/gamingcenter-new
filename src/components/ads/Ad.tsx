import Box from '@mui/material/Box'
import CampaignIcon from '@mui/icons-material/Campaign';
import Typography from '@mui/material/Typography';

const Ad = () => {
    return (
        <Box
            component={'div'}
            className='flex flex-col flex-1 items-center bg-secondary rounded-lg justify-center border border-[var(--gray-border)] py-4'
        >
            <CampaignIcon className='text-[var(--red)] text-5xl' />
            <Typography
                variant="h6"
                noWrap
                className='flex font-semibold text-secondary-light'
                sx={{
                    fontFamily: 'monospace',
                    textDecoration: 'none',
                }}
            >
                Advertisement
            </Typography>
        </Box>
    )
}

export default Ad
