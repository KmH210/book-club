import { ObjectId } from "mongodb";
import { Book } from "./Book";

export interface LogPost{
    _id?: ObjectId;
    memberName: string;
    typeOfPost: string;
    book: Book;
    pagesRead?:number;
    currentPage?: number;
}