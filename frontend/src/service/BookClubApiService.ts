import axios from "axios";
import { MemberBook } from "../model/book";
import Competition from "../model/Competition";
import { LogPost } from "../model/LogPost";

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

//updateMemberBook

//updateCurrentCompetition

