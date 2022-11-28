import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App () {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const res = await axios.get('http://localhost:3001/books', {});
        setBooks(res.data);
    }
    useEffect(()=>{
        fetchBooks();
    }, [])

    const createBook = async (title) => {
       const res = await axios.post('http://localhost:3001/books', {
            title
        });
        // console.log(title);
        // const updatedBooks = [...books, {id : Math.round(Math.random() * 9999), title}]
        const updatedBooks = [...books, res.data];
        setBooks(updatedBooks);
        // console.log(books);
    }

    const deleteBookById = async (id) => {
        const res = await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {return book.id !== id;});
        setBooks(updatedBooks);
    }

    const editBookById = async (id, newTitle) => {

        const res = await axios.put(`http://localhost:3001/books/${id}`, {
            title : newTitle
        });

        const updatedBooks = books.map((book)=>{
            if(book.id === id) {
                return {...book, ...res.data}
            }
            return book;
        });
        setBooks(updatedBooks);
        console.log(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onDelete={deleteBookById} onEdit={editBookById} books={books} />
            <BookCreate onCreate={createBook}></BookCreate>
        </div>
    );
}

export default App;