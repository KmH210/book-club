import { ObjectId } from 'mongodb';
import { Member } from './Member'

export interface Competition {
    _id?: ObjectId;
    name: string;
    startDate: string;
    endDate: string;
    memberLogs: MemberLog[];
    isFinished: boolean;
}

export interface MemberLog {
    member: Member;
    pagesRead: number;
    booksFinished: number;
}