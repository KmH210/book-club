import React, { useEffect, useState } from "react";
import Book from "../model/book";
import { getABook } from "../service/OpenLibraryApiService";

function Test(){
    const [book, setBook] = useState<Book>();
    
    useEffect(() => {
        loadBook();
    }, []);
    
    function loadBook() {
        getABook().then(bookFromApi=> {
            setBook(bookFromApi);
            
        });

    }
    console.log(book);
    return(
        <div className="test">{book?.title}</div>
    )
}

export default Test;


