import Book from "./book";

export interface LogPost{
    _id?: string;
    memberName: string;
    typeofPost: string;
    book: Book;
    pagesRead?:number;
    totalProgress: number;
    currentPage: number;
}