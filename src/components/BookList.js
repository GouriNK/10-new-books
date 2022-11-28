import { useContext } from 'react';
import BooksContext from '../context/books';
import BookItem from './BookItem';

function BookList({ books, onDelete, onEdit}) {

  const {count, incrementCount} = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookItem key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
  });

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Increment Count</button>
    {renderedBooks}
    </div>
  );
}

export default BookList;