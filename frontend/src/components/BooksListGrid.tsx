import { useMemo } from 'react';
import { Grid, Typography, styled } from '@mui/material';

import { BookCard, EmptyBookCard } from '.';
import { useReadingList, useAuth } from '../context';
import { Book } from '../types';

const ReadingListText = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  color: theme.palette.secondary.main,
  margin: '2% 0',
  [theme.breakpoints.up('md')]: {
    margin: '2% 0',
  },
}));

interface BookListGridProps {
  books: Book[];
}

const BookListGrid: React.FC<BookListGridProps> = ({ books }) => {
  const { fullName } = useAuth();
  const { readingListBooks } = useReadingList();

  const toBeDisplayedBooks = useMemo(() => {
    return !fullName ? books : readingListBooks;
  }, [fullName, books, readingListBooks]);

  return (
    <>
      <ReadingListText variant='h6'>Reading List</ReadingListText>
      <Grid container spacing={2}>
        {fullName && !readingListBooks.length ? (
          <Grid item xs={12} sm={6} md={3} lg={2} spacing={2}>
            <EmptyBookCard />
          </Grid>
        ) : (
          toBeDisplayedBooks.map((book) => (
            <Grid item xs={12} sm={6} md={3} lg={2} spacing={2} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default BookListGrid;
