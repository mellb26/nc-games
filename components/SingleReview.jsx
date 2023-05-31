import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewById } from "../utils/data";

const SingleReview = () => {
    const [review, setReview] = useState({});
   
    const { review_id } = useParams();
  useEffect(() => {
    reviewById(review_id)
      .then(({ data: { review } }) => {
              setReview(review) })
 
          
            .catch((err) => console.error(err.message));
    }, [review_id]);
    console.log(review)
        return (
          <>
            <h2> {review_id} </h2>
              <ul>
    
                    <li key={review.review_id}>
                    <div className="card">
                    <div className="container">
                      <p>Game Title: {review.title}</p>
                      <p>Game Designer: {review.designer}</p>
                      <p>User: {review.owner}</p>
                      <p>Category: {review.category}</p>
                      <p>Date Created: {review.created_at}</p>
                      <p>Votes: {review.votes}</p>
                      <p>Number Of Comments: {review.comment_count}</p>
                      <p> {review.review_body}</p>
                      </div>
                    <img src={review.review_img_url}></img>
                  </div>
                  </li>
                  
               
              </ul>
          
          </>
        );
    }


    export default SingleReview;
