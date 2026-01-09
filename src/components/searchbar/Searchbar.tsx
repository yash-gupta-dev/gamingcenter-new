import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const Search = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem',
        position: 'relative',
        borderRadius: '9rem',
        backgroundColor: '#334155',
        '&:hover': {
            backgroundColor: '#334155',
        },
        marginLeft: 0,
        width: '100%',
        padding: '.4rem 1rem',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        },
    }));

    return <Search>
        <SearchIcon />
        <StyledInputBase
            placeholder="Search Games, genres or tags..."
            className="text-base w-80"
            inputProps={{ 'aria-label': 'search' }}
        />
    </Search>
}

export default SearchBar