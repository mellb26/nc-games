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
                <p>{review.title}</p>
                <p>{review.designer}</p>
                <p>{review.owner}</p>
                <p>{review.review_img_url}</p>
                <p>{review.category}</p>
                <p>{review.created_at}</p>
                <p>{review.votes}</p>
                <p>{review.comment_count}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Reviews;
