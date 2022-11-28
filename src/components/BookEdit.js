import { useState } from "react";

function BookEdit ({currBook, onSubmit}) {

    const [newBookName, setNewBookName] = useState(currBook.title);

    const handleChange = (event) => {
        setNewBookName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(currBook.id, newBookName);
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