import axios from "axios";
import Book from "../model/book";

export function getABook():Promise<Book>{
    return axios.get("https://openlibrary.org/books/OL7353617M.json").then(res => res.data);
  }