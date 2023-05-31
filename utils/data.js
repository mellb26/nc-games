import axios from "axios";

const api = axios.create({
  baseURL: "https://melissa-nc-games-yax7.onrender.com"
});

export function home() {
  return api.get(`/api/home`)
}

export function AllReviews() {
return api.get(`/api/reviews`)
}

export function reviewById(selectedReview) {
  console.log(selectedReview, 'hhh')
  return api.get(`/api/reviews/${selectedReview}`)
}