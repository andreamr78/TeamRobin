import React from "react";
import "./CommentCard.css";
function CommentCard({
  username,
  starRating,
  review,
}: {
  username: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  review: String;
}) {
  const Stars = () => {
    const stararray = [];
    for (let i = 0; i < 5; i++) {
      let selectedClass = "";

      if (i < starRating) {
        selectedClass = "star-rating-selected";
      }

      stararray.push(
        <span key={"star" + i} className={selectedClass}>
          <input type="radio" name="rating"/>
          <label className="bi bi-star-fill"></label>
        </span>
      );
    }
    return stararray;
  };

  return (
    <div className="comment-card">
      <div>
        <div className="col-md-6">
          <div className="rating-card">
            <div className="star-rating-static animated-stars">
              <Stars />
            </div>
          </div>
        </div>
      </div>
      <div>
        <b>{username}</b>
      </div>
      <div>{review}</div>
    </div>
  );
}

export default CommentCard;
