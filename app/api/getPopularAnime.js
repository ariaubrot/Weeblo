"use server"
export const getPopularAnime = async () => {
import axios from "axios";

// Using the example query "demon", and looking at the first page of results.
const url = "https://api.consumet.org/meta/anilist/trending";
const data = async () => {
 try {
 const { data } = await axios.get(url, { params: {
 page: 1,
 perPage: 20
 } });
 return data;
 } catch (err) {
 throw new Error(err.message);
 }
};

console.log(data);

