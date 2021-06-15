import React, { useEffect, useState } from "react";
// import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";
import { readAllPosts, readCurrentCompetition, readMostBooks, readMostPages } from "../service/BookClubApiService";
import { BooksLeader, PagesLeader } from "../model/Leader";
import { Competition } from "../model/Competition";
   

function CompetitionSummary(){

    const [pagesLeader, setPagesLeader] = useState<PagesLeader>()
    const [booksLeader, setBooksLeader] = useState<BooksLeader>()
    const [competition, setCompetition] = useState<Competition>()

    useEffect(() => {
        readMostPages().then(pagesLeaderFromApi => {
            setPagesLeader(pagesLeaderFromApi[0]);
        });
       readMostBooks().then(booksLeaderFromApi => {
           setBooksLeader(booksLeaderFromApi[0]);
       });
       readCurrentCompetition().then(competitionFromApi => {
           setCompetition(competitionFromApi);
       });
       console.log(pagesLeader);
       console.log(booksLeader);
    }, []);


    return(
        <div className="CompetitionSummary">
           <h2>{competition?.name}</h2>
           <h3>Current Leaders</h3>
           {pagesLeader && <p>Most Pages Read: {pagesLeader.name}, {pagesLeader.totalPages} Pages</p>}
           {booksLeader && <p>Most Books Read: {booksLeader.name}, {booksLeader.totalBooksFinished} Books</p>} 
           <p>This competition ends on: {competition?.endDate}</p>  
        </div>
    )
}

export default CompetitionSummary;
