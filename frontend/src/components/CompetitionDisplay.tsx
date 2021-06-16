import { useEffect, useState } from "react";
import { readAllTotals, readCompetitionStats, readCurrentCompetition } from "../service/BookClubApiService";
import { Competition, MemberStats, Totals } from "../model/Competition";
import "./CompetitionDisplay.css"


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
            {!stats ? 
          <p>Loading...</p>
         : 
            <div>
           <h2>Current Competition: {competition?.name}</h2>
           <p>This competition ends on: {competition?.endDate}</p>
           <h3>Pages</h3>
           <ul className="statusBarsContainer">{stats?.map(eachStat => 
                <li  key={eachStat.name}> 
                    <p>{eachStat.name}: {eachStat.totalPages} pages</p>
                    <div className="statusBarGhost"><div className="statusBar" style={{width: eachStat.totalPages/totals?.totalPages!*100 + "%"}}></div></div>
                </li>
                )}
           </ul>
           </div>}
           {!stats ? 
          <p>Loading...</p>
         : 
            <div>
           <h3>Books</h3>
           <ul className="statusBarsContainer">{stats?.map(eachStat => 
                <li  key={eachStat.name}> 
                    <p>{eachStat.name}: {eachStat.totalBooksFinished} book(s)</p>
                    <div className="statusBarGhost"><div className="statusBar" style={{width: eachStat.totalBooksFinished/totals?.totalBooksFinished!*100 + "%"}}></div></div>
                </li>
                )}
           </ul>
           </div>}
        </div>
    )
}

export default CompetitionDisplay;