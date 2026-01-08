import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type React from 'react'

interface Props {
    Icon: React.ReactNode;
    title: string
}

const Category = ({ Icon, title }: Props) => {
    return (
        <Box
            component={'div'}
            className='flex flex-1 flex-col items-center gap-y-2 py-5 bg-secondary rounded-md'
        >
            {Icon}
            <Typography
                variant="h1"
                noWrap
                className='text-white text-sm text-secondary-light'
            >
                {title}
            </Typography>
        </Box>
    )
}

export default Category
