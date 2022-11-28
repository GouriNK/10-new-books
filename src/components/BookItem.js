import { useState } from "react";
import BookEdit from "./BookEdit";

function BookItem ({book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditSubmit = (id, newTitle) => {
        onEdit(id, newTitle);
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