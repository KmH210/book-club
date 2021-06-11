import { ObjectId } from "mongodb";
import { Book } from "./Book";
import { Member } from "./Member";

export interface LogPost{
    _id?: ObjectId;
    member: Member;
    typeOfPost: string;
    book: Book;
    pagesRead?:number;
}