import { useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  styled,
  Tooltip,
} from '@mui/material';

import { getCorrectImagePath } from '../utils';
import { Book } from '../types.ts';
import theme from '../theme.ts';
import { useReadingList } from '../context';

const BookCardImageContainer = styled(Paper)(() => ({
  position: 'relative',
  width: '100%',
  paddingBottom: '150%',
  overflow: 'hidden',
  border: '10px solid white',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  [theme.breakpoints.down('md')]: {
    paddingBottom: '100%',
  },
}));

const BookCardFooter = styled(Box)(() => ({
  display: 'flex',
  paddingTop: '4px',
  flexGrow: '1',
  '& > :first-of-type': {
    width: '90%',
  },
  '& > :nth-of-type(2)': {
    width: '10%',
  },
}));

const MenuButton = styled(Button)(() => ({
  minWidth: '0px',
  ':hover': {
    textDecoration: 'auto',
    backgroundColor: 'white',
  },
}));

const BookTitleText = styled(Typography)(({ theme }) => ({
  ontWeight: '500',
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  color: theme.palette.secondary.main,
}));

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { removeBookFromReadingList } = useReadingList();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveBook = () => {
    removeBookFromReadingList(book);
    handleClose();
  };

  return (
    <>
      <BookCardImageContainer>
        <img src={getCorrectImagePath(book.coverPhotoURL)} />
      </BookCardImageContainer>
      <BookCardFooter>
        <Box>
          <Tooltip title={book.title}>
            <BookTitleText gutterBottom>{book.title}</BookTitleText>
          </Tooltip>
          <Typography fontWeight='300'>by {book.author}</Typography>
        </Box>
        <Box>
          <MenuButton sx={{ padding: '0' }} onClick={handleClick}>
            <span className='material-symbols-outlined'>more_vert</span>
          </MenuButton>
          <Menu
            id={`demo-positioned-menu-${book.id}`}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: -75,
            }}
          >
            <MenuItem onClick={handleRemoveBook}>Remove</MenuItem>
          </Menu>
        </Box>
      </BookCardFooter>
    </>
  );
};

export default BookCard;
