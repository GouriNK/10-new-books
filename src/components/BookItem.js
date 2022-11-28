import { useContext, useState } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookItem ({book}) {

    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
      deleteBookById(book.id);
    }

    const handleEditSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit currBook={book} onSubmit={handleEditSubmit}/>
    }

    return (
        <div className="book-show">
          <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
          <div>{content}</div>
          <div className="actions">
            <button className="edit" onClick={handleEditClick}>
              Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      );
}

export default BookItem;