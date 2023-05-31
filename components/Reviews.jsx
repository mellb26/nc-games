import { useEffect, useState } from "react";
import { AllReviews } from "../utils/data";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
    AllReviews()
      .then(({ data }) => {
          setAllReviews(data);
          console.log(data)
      })
      .catch((err) => console.log(err));
  }, []);
    const { reviews } = allReviews;
  if (reviews) {
    return (
      <>
        <h2> Reviews </h2>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <div className='card'>
                <div className="container">  
                <p>Game Title: {review.title}</p>
                <p>Game Designer: {review.designer}</p>
                <p>User: {review.owner}</p>
                <p>Category: {review.category}</p>
                <p>Date Created: {review.created_at}</p>
                <p>Votes: {review.votes}</p>
                <p>Number Of Comments: {review.comment_count}</p>
                </div>
                <img src={review.review_img_url}></img>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Reviews;
