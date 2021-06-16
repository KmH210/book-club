import { FormEvent, useEffect, useState } from "react";
import { Competition } from "../model/Competition";
import { createNewCompetition, readCurrentCompetition} from "../service/BookClubApiService";
import { useHistory } from "react-router-dom";
import "./CompetitionForm.css"


function CompetitionForm(){

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] =useState("");
    const [compName, setCompName] = useState("");
    const history = useHistory();
    const [existingCompetition, setExistingCompetition] = useState<Competition | undefined> ();
    
    useEffect(() => {
       readCurrentCompetition().then(competitionFromApi => {
           setExistingCompetition(competitionFromApi);
       });
    }, []);

    function handleSubmit(event:FormEvent):void {
        event.preventDefault();
        createNewCompetition(newCompetition);
        history.push("/");
      }
    
    const newCompetition:Competition = {
        name: compName,
        startDate: startDate,
        endDate: endDate,
        memberLogs: [],
        isFinished: false
    }

    return(
        <div className="CompetitionForm">
           {existingCompetition ? 
           <p>You already created a competition</p> :
           <form onSubmit={handleSubmit}>
               <p>Start a New Competition</p>
                <label>Name your new competition:
                    <input type="text" value={compName} onChange={(e) => setCompName(e.target.value)}/>
                </label>
                <p>
                    <label>When does this competition start?
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>
                    </label>
                </p>
                <p>
                    <label>When does this competition end?
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}></input>
                    </label>
                </p>
                <p>
                <button type="submit">Start New Competition</button>
                </p>
           </form>}
        </div>
    )
}

export default CompetitionForm;