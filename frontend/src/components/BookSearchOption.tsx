import { Box, Button, Typography, styled } from '@mui/material';

import { Book } from '../types.ts';
import { getCorrectImagePath } from '../utils';
import { useReadingList } from '../context';

const ImageContainer = styled(Box)(() => ({
  width: '150',
  height: '70px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const BookSearchOption: React.FC<{
  book: Book;
}> = ({ book }) => {
  const { addBookToReadingList } = useReadingList();

  const handleAddingBook = () => {
    addBookToReadingList(book);
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
    >
      <Box display='flex' alignItems='center'>
        <ImageContainer>
          <img src={getCorrectImagePath(book.coverPhotoURL)} alt={book.title} />
        </ImageContainer>
        <Typography px={2}>{book.title}</Typography>
      </Box>
      <Button
        variant='contained'
        onClick={handleAddingBook}
        sx={{ ml: 'auto', color: 'white', fontWeight: '800' }}
      >
        Add
      </Button>
    </Box>
  );
};

export default BookSearchOption;
