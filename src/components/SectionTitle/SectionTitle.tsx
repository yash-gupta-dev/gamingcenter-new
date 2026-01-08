import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <Box 
        component={'div'}
        className="flex justify-between items-center"
        >
        <Typography
            variant="h3"
            noWrap
            className='text-white text-2xl font-bold text-secondary-light'
            sx={{
                textDecoration: 'none',
            }}
        >
            {title}
        </Typography>

        <Typography
            variant="caption"
            noWrap
            component={'button'}
            className='flex items-center gap-x-1 text-custom-red text-xs font-bold text-custom-red'
            sx={{
                textDecoration: 'none',
            }}
        >
            View All <ArrowRightAltIcon/>
        </Typography>
        </Box>
    )
}

export default SectionTitle
