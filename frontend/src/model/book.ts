export default interface Book{
    isbn_13:string[];
    title: string;
    number_of_pages: number;
    covers?:[]
}

export interface MemberBook {
    _id?: string;
    memberName: string;
    book: Book;
    currentPage?: number;
    isFinished: boolean;
}