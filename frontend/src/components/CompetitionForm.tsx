import { FormEvent, useState } from "react";
import { createNewCompetition} from "../service/BookClubApiService";
import "./CompetitionForm.css"


function CompetitionForm(){

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] =useState("");
    const [compName, setCompName] = useState("");

    function handleSubmit(event:FormEvent):void {
        event.preventDefault();
        createNewCompetition().then((data) => {
            setCompName(compName)})
      }

    return(
        <div className="CompetitionForm">
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
           </form>
        </div>
    )
}

export default CompetitionForm;