import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit ({currBook, onSubmit}) {

    const [newBookName, setNewBookName] = useState(currBook.title);
    const { editBookById } = useContext(BooksContext);

    const handleChange = (event) => {
        setNewBookName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(currBook.id, newBookName);
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={newBookName} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;