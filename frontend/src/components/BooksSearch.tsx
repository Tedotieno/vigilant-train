import { useState } from 'react';
import { Autocomplete, TextField, Box, styled } from '@mui/material';

import { BookSearchOption } from '.';
import { Book } from '../types';

const BooksSearchContainer = styled(Box)(() => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  backgroundColor: 'white',
}));

const LogoImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '2% 0',
  '& img': {
    width: '12%',
    [theme.breakpoints.up('md')]: {
      width: '6%',
    },
  },
}));

interface BooksSearchProps {
  books: Book[];
}

const BooksSearch: React.FC<BooksSearchProps> = ({ books }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const defaultProps = {
    options: books as Book[],
    getOptionLabel: (option: Book) => option.title,
  };

  const handleSelectionChange = (
    _event: React.ChangeEvent<{}>,
    newBook: Book | null
  ) => {
    setSelectedBook(newBook);
    newBook ? setInputValue(newBook.title) : setInputValue('');
  };

  const handleInputChange = (
    _event: React.ChangeEvent<{}>,
    newInputValue: string,
    reason: string
  ) => {
    if (reason === 'input') {
      setInputValue(newInputValue);
    }
  };

  const handleOptionClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <BooksSearchContainer>
      <LogoImageContainer>
        <img src='src/assets/icons/ello-logo.svg' alt='' />
      </LogoImageContainer>
      <Autocomplete
        id='search-books'
        {...defaultProps}
        value={selectedBook}
        onChange={handleSelectionChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        renderInput={(params) => <TextField {...params} label='Search book' />}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.id} onClick={handleOptionClick}>
              <BookSearchOption book={option} />
            </li>
          );
        }}
      />
    </BooksSearchContainer>
  );
};

export default BooksSearch;
