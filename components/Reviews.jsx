import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllReviews } from "../utils/data";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState([])

    useEffect(() => {
    AllReviews()
      .then(({ data }) => {
        setAllReviews( data );
        console.log(data)
        setLoading(false)
      })
      .catch((err) => console.log(err));
    }, []);
  
  if (loading) {
    return  <p> Loading . . .</p>
  }
  const { reviews } = allReviews;


  if (reviews) {
    return (
      <>
        <h2> Reviews </h2>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <div className="card">
                  <div className="container">
                    <p>Game Title: {review.title}</p>
                    <p>Game Designer: {review.designer}</p>
                    <p>User: {review.owner}</p>
                    <p>Category: {review.category}</p>
                    <p>Date Created: {review.created_at }</p>
                    <p>Votes: {review.votes}</p>
                    <p>Number Of Comments: {review.comment_count}</p>
                    <Link to={`/reviews/${review.review_id}`}>
                      <button> Reviews</button>
                    </Link>
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
