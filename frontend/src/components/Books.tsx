import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BookListGrid, BooksSearch } from '.';
import { useApi } from '../hooks/api';
import { Book } from '../types';
import { ReadingListProvider } from '../context';

const BOOKS_QUERY = `
  query {
    books {
      author
      title
      coverPhotoURL
      readingLevel
    }
  }
`;

const Books: React.FC = () => {
  const { data, loading, error } = useApi<{ books: Book[] }>(BOOKS_QUERY);
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (data?.books) {
      const booksWithIds = data.books.map((book, index) => ({
        id: uuidv4(),
        index,
        ...book,
      }));
      setAllBooks(booksWithIds);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ReadingListProvider>
        <BooksSearch books={allBooks} />
        <BookListGrid books={allBooks} />
      </ReadingListProvider>
    </>
  );
};

export default Books;
