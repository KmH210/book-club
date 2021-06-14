import axios from "axios";
import { LogPost } from "../model/LogPost";

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function readAllPosts():Promise<LogPost[]> {
  return axios.get(baseUrl).then(res => res.data);
}


//readCurrentCompetition

//readMostPages

//readMostBooks

//createNewMemberBook

//readCurrentMemberBooks

//updateMemberBook

//updateCurrentCompetition

