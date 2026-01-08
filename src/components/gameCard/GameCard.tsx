import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface Props {
    title: string;
    rating: number;
    plays: string;
    isNew?: boolean
}

export default function GameCard({ title, rating, plays, isNew }: Props) {

    const bull = (
        <Box
            component="span"
            className='mx-2 text-xl'
            sx={{ display: 'inline-block', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <Card className='bg-secondary'>
            <CardMedia
                sx={{ height: '10rem' }}
                image={`https://picsum.photos/200?${title}`}
                title="green iguana"
            />
            <CardContent className='py-3'>
                <Typography gutterBottom variant="h5" component="div" className='text-sm text-white'>
                    {title}
                </Typography>
                <Typography variant="body2" className='flex items-center text-secondary-light text-xs font-extralight'>
                    {
                        isNew ? <Box component={'span'} className='bg-custom-red text-white px-2 py-[2px] rounded-sm mr-2'>
                            New
                        </Box>  : <><StarBorderIcon className='text-sm text-yellow-400 mr-1' />  {rating} {bull}</>
                    } {plays} plays
                </Typography>
            </CardContent>
        </Card>
    );
}
