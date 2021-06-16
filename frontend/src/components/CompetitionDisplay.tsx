import { useEffect, useState } from "react";
import { readAllTotals, readCompetitionStats, readCurrentCompetition } from "../service/BookClubApiService";
import { Competition, MemberStats, Totals } from "../model/Competition";


function CompetitionDisplay(){
    const [competition, setCompetition] = useState<Competition>()
    const [stats, setStats] = useState<MemberStats[]>()
    const [totals, setTotals] = useState<Totals>()

    useEffect(() => {
       readCurrentCompetition().then(competitionFromApi => {
           setCompetition(competitionFromApi);
       });
       readCompetitionStats().then(statsFromApi => {
           setStats(statsFromApi);
       })
       readAllTotals().then(totalsFromApi => {
            setTotals(totalsFromApi[0])
       })
    }, []);
    
    return(
        <div className="CompetitionDisplay">
           <h2>Current Competition: {competition?.name}</h2>
           <p>This competition ends on: {competition?.endDate}</p>
           <h3>Pages</h3>
           <ul className="statusBarsContainer">{stats?.map(eachStat => 
                <li  key={eachStat.name}> 
                    <p>{eachStat.name}: {eachStat.totalPages} pages</p>
                    <div className="statusBar" style={{width: eachStat.totalPages/totals?.totalPages!*100 + "%"}}></div>
                </li>
                )}
           </ul>
           <h3>Books</h3>
           <ul className="statusBarsContainer">{stats?.map(eachStat => 
                <li  key={eachStat.name}> 
                    <p>{eachStat.name}: {eachStat.totalBooksFinished} pages</p>
                    <div className="statusBar" style={{width: eachStat.totalBooksFinished/totals?.totalBooksFinished!*100 + "%"}}></div>
                </li>
                )}
           </ul>
        </div>
    )
}

export default CompetitionDisplay;
