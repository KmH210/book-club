import { useEffect, useState } from "react";
import { readCurrentCompetition, readMostBooks, readMostPages } from "../service/BookClubApiService";
import { BooksLeader, PagesLeader } from "../model/Leader";
import { Competition } from "../model/Competition";
import "./CompetitionSummary.css"
import { Link } from "react-router-dom";
   

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
    }, []);


    return(
        <div className="CompetitionSummary">
            {competition? <>
           <h2>Competition Name: {competition?.name}</h2>
           <h3>Current Leaders</h3>
           {pagesLeader && <p>Most Pages Read: {pagesLeader.name}, {pagesLeader.totalPages} Pages</p>}
           {booksLeader && <p>Most Books Read: {booksLeader.name}, {booksLeader.totalBooksFinished} Books</p>} 
           <p>This competition ends on: {competition?.endDate}</p>  
           </>:
           <p><Link to="/start-new-competition">Start a New Competition</Link></p>
            }</div>
    )
}

export default CompetitionSummary;
