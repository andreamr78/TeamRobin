import React, { useState, useEffect } from "react";
import CommentCard from "../components/CommentCard";
import CommentPopup from "../components/CommentPopup";

function IndividualPage() {
  const [showModal, setShowModal] = useState(false);
  const [storeValue, setStoreValue] = useState([]);

  useEffect(() => {
    const comments = localStorage.getItem("comments");
    if (comments) {
      setStoreValue(JSON.parse(comments));
    }
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    location.reload();
  };
  //mandar la data de la home page y mostrarla aca
  //local storage???? maybe???
  //weather widget + nombre de la ciudad
  //comments card + stars
  //agregar comentario? + comment card
  return (
    <div>
      IndividualPage
      {storeValue.map(({ username, comment, starRating }) => (
        <CommentCard
          username={username}
          review={comment}
          starRating={starRating}
          key={username + starRating}
        />
      ))}
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleClick}
      >
        Add Review
      </button>
      <CommentPopup show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default IndividualPage;
