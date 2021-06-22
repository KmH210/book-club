import Book from "./book";

export interface LogPost{
    _id?: string;
    memberName: string;
    memberPhoto?: string;
    typeofPost: string;
    book: Book;
    pagesRead?:number;
    currentPage: number;
}