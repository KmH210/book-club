import axios from "axios";
import { MemberBook } from "../model/book";
import Competition from "../model/Competition";
import { LogPost } from "../model/LogPost";
import { MemberLog } from "../model/MemberLog";
import { ProgressUpdate } from "../model/ProgressUpdate";

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function readAllPosts():Promise<LogPost[]> {
  return axios.get(`${baseUrl}posts`).then(res => res.data);
}

export function setNewMemberBook(newMemberBook: MemberBook):Promise<MemberBook> {
  return axios.post(`${baseUrl}member`, newMemberBook).then(res => res.data);
}


export function createBookPost(newMemberBook: MemberBook):Promise<LogPost> {
  return axios.post(`${baseUrl}posts`, newMemberBook).then(res => res.data);
}

export function readCompetitionStats():Promise<Competition> {
  return axios.get(`${baseUrl}competition`).then(res => res.data);
}


//readCurrentCompetition

//readMostPages

//readMostBooks

//createNewMemberBook

//readCurrentMemberBooks
export function readCurrentMemberBooks(memberName:string):Promise<MemberBook[]> {
  return axios.get(`${baseUrl}member/${encodeURIComponent(memberName)}`).then(res => res.data);
}


//updateMemberBook
export function updateCurrentMemberBook(update:ProgressUpdate, id:string):Promise<MemberBook> {
  return axios.put(`${baseUrl}member/${encodeURIComponent(id)}`, update).then(res => res.data);
}

//updateCurrentCompetition
export function updateCurrentCompetition(newMemberLog:MemberLog):Promise<MemberLog> {
  return axios.put(`${baseUrl}competition`, newMemberLog).then(res => res.data);
}
