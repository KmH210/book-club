import { ObjectId } from 'mongodb';
import { Book } from './Book';

export interface MemberBook {
    _id?: ObjectId;
    memberName: string;
    book: Book;
    currentPage: number;
    isFinished: boolean;
}

export interface ProgressUpdate {
    currentPage:number;
    isFinished:boolean
}

