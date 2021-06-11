import { ObjectId } from 'mongodb';

export interface Competition {
    _id?: ObjectId;
    name: string;
    startDate: string;
    endDate: string;
    memberLogs: MemberLog[];
    isFinished: boolean;
}

export interface MemberLog {
    memberName: string;
    pagesRead: number;
    booksFinished: number;
}