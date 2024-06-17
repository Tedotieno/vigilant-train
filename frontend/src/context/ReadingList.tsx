import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { Snackbar, Alert } from '@mui/material';

import { Book } from '../types';

interface ReadingListContextType {
  readingListBooks: Book[];
  addBookToReadingList: (book: Book) => void;
  removeBookFromReadingList: (book: Book) => void;
}

interface ReadingListProviderProps {
  children: ReactNode;
}

export const ReadingListContext = createContext<
  ReadingListContextType | undefined
>(undefined);

export const useReadingList = () => {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error('useReadingList must be used within a ReadingListProvider');
  }
  return context;
};

export const ReadingListProvider: React.FC<ReadingListProviderProps> = ({
  children,
}) => {
  const [readingListBooks, setReadingListBooks] = useState<Book[]>(() => {
    const storedBooks = localStorage.getItem('readingListBooks');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('info');

  useEffect(() => {
    localStorage.setItem('readingListBooks', JSON.stringify(readingListBooks));
  }, [readingListBooks]);

  const isBookInReadingList = (book: Book) => {
    return readingListBooks.some((b) => b.index === book.index);
  };

  const handleAddingBook = (book: Book) => {
    if (isBookInReadingList(book)) {
      showSnackbar('This book is already in your reading list.', 'warning');
      return;
    }
    setReadingListBooks((previousBooks) => [book, ...previousBooks]);
    showSnackbar('Book successfully added to your reading list.', 'success');
  };

  const handleRemovingBook = (book: Book) => {
    setReadingListBooks((previousBooks) => {
      return previousBooks.filter(
        (previousBook) => previousBook.index !== book.index
      );
    });
    showSnackbar(
      'Book successfully removed from your reading list.',
      'success'
    );
  };

  const showSnackbar = (
    message: string,
    severity: 'success' | 'info' | 'warning' | 'error'
  ) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const contextValue = {
    readingListBooks,
    addBookToReadingList: handleAddingBook,
    removeBookFromReadingList: handleRemovingBook,
  };

  return (
    <ReadingListContext.Provider value={contextValue}>
      {children}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ReadingListContext.Provider>
  );
};
