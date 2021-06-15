import React, { useEffect, useState } from "react";
// import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";
import { readAllPosts, readCompetitionStats, readCurrentCompetition, readMostBooks, readMostPages } from "../service/BookClubApiService";
import { Competition, MemberStats } from "../model/Competition";
   


function CompetitionDisplay(){

    const [competition, setCompetition] = useState<Competition>()
    const [stats, setStats] = useState<MemberStats[]>()

    useEffect(() => {
       readCurrentCompetition().then(competitionFromApi => {
           setCompetition(competitionFromApi);
       });
       readCompetitionStats().then(statsFromApi => {
           setStats(statsFromApi);
       })
    }, []);

    return(
        <div className="CompetitionDisplay">
           <h2>{competition?.name}</h2>
           <p>This competition ends on: {competition?.endDate}</p>
           <h4>Pages</h4>
           <ul>{stats?.map(eachStat => 
           <li key={eachStat.name}>{eachStat.name}: {eachStat.totalPages} pages</li>)}</ul>
           <h4>Books</h4>
           <ul>{stats?.map(eachStat => 
           <li key={eachStat.name}>{eachStat.name}: {eachStat.totalBooksFinished} books</li>)}</ul>
        </div>
    )
}

export default CompetitionDisplay;
