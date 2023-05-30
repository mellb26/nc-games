import axios from "axios";

const api = axios.create({
  baseURL: "https://melissa-nc-games-yax7.onrender.com"
});

export function AllReviews() {
return api.get(`/api/reviews`)
}