import { ObjectId } from 'mongodb';
import { Book } from './Book';

export interface Member {
    _id?: ObjectId;
    name: string;
    books: MemberBook;
}

export interface MemberBook {
    book: Book;
    currentPage: number;
    isFinished: boolean;
}