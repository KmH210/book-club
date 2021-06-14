import axios from "axios";
import Book from "../model/book";

export function getABook(Isbn: string):Promise<Book>{
    return axios.get(`https://openlibrary.org/isbn/${Isbn}.json`).then(res => res.data);
  }