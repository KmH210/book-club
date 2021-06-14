export default interface Book{
    isbn_10:string[];
    title: string;
    number_of_pages: number;
}

export interface MemberBook {
    _id?: string;
    memberName: string;
    book: Book;
    currentPage?: number;
    isFinished: boolean;
}