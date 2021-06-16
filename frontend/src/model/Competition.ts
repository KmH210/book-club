export interface Competition {
    _id?: string;
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

export interface MemberStats {
    name: string;
    totalPages: number;
    totalBooksFinished: number;
}

export interface Totals {
    totalPages: number;
    totalBooksFinished: number;
}

export interface StartNewCompetition {
    name: string;
    startDate: string;
    endDate: string;
}