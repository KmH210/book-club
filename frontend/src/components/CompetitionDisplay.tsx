import React, { useEffect, useState } from "react";
// import Book from "../model/book";
import { LogPost } from "../model/LogPost";
import PostCard from "./PostCard";
import { readAllPosts, readCompetitionStats, readCurrentCompetition, readMostBooks, readMostPages } from "../service/BookClubApiService";
import { Competition, MemberStats } from "../model/Competition";
import { forEachTrailingCommentRange } from "typescript";
import { stat } from "fs";
   


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

    let totalPagesReadByAll = 1847;

    function getTotal() { 
    for (const eachStat of stats!) {
        let total = 0;
        total += eachStat.totalPages;
        return total
    }}
    
    

    return(
        <div className="CompetitionDisplay">
           <h2>{competition?.name}</h2>
           <p>This competition ends on: {competition?.endDate}</p>
           <h4>Pages</h4>
           <ul className="statusBarsContainer">{stats?.map(eachStat => 
                <li  key={eachStat.name}> 
                    <p>{eachStat.name}: {eachStat.totalPages} pages</p>
                    <div className="statusBar" style={{width: eachStat.totalPages/totalPagesReadByAll!*100 + "%"}}></div>
                </li>
                )}
           </ul>
           <h4>Books</h4>
           <ul>{stats?.map(eachStat => 
           <li key={eachStat.name}>{eachStat.name}: {eachStat.totalBooksFinished} books</li>)}</ul>
        </div>
    )
}

export default CompetitionDisplay;
