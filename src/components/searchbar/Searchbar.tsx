import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const Search = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        padding: '.3rem 1rem',
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
        <StyledInputBase
            placeholder="Search Games..."
            className="text-base"
            inputProps={{ 'aria-label': 'search' }}
        />
        <SearchIcon />
    </Search>
}

export default SearchBar