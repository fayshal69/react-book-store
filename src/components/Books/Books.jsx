import { useEffect, useState } from "react";
import './Books.css'
import Book from "../Book/Book";

const Books = ({handleAddToCart}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);

    return (
        <div>
            <div className="books">
                {
                    books.map((book) => <Book key={book.id} handleAddToCart={handleAddToCart} book={book}></Book>) 
                }
            </div>
        </div>
    );
};

export default Books;