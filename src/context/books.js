import axios from "axios";
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const res = await axios.get('http://localhost:3001/books', {});
        setBooks(res.data);
    }

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
         await axios.delete(`http://localhost:3001/books/${id}`);
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

    const contextToShare = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById
    }

    return <BooksContext.Provider value = {contextToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;

// import BooksContext, {Provider} from './abc'