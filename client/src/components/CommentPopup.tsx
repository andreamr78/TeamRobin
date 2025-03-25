import React, { useState } from "react";
import "./CommentPopup.css";

function CommentPopup({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [starRating, setStarRating] = useState(0);
  const [message, setMessage] = useState("");

  let showModalClass = "";
  if (show) {
    showModalClass = "show-modal-class";
  }

  const handleStarClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as unknown as number;
    setStarRating(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const existingComments = JSON.parse(
      localStorage.getItem("comments") ?? "[]"
    ) as Array<Record<string, string | number>>;
    const newValue = [...existingComments, { username, comment, starRating }];

    localStorage.setItem("comments", JSON.stringify(newValue));
    setUsername("");
    setComment("");
    setStarRating(0);
    handleClose();

    // TO DO Activar cuando el endpoint esté listo

    /* try {
      const response = await fetch("/submit-comment", {
        // aquí se debe cambiar por el endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, comment, starRating }),
      });

      const data = await response.json();

      if (response.ok) {
        setUsername("");
        setComment("");
        setStarRating(0);
        handleClose();
      } else {
        setMessage(`Error: ${data.message || "Algo salió mal"}`);
      }
    } catch (error) {
      setMessage("Hubo un problema con el servidor.");
    }*/
  };

  return (
    <div className={showModalClass + " modal"}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Leave your review</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Comment</b>
                </label>
                <textarea
                  className="form-control"
                  required
                  rows={3}
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Rating</b>
                </label>
                <div>
                  <div className="star-rating animated-stars">
                    <input
                      type="radio"
                      id="star5"
                      name="rating"
                      value={5}
                      onChange={handleStarClick}
                    />
                    <label className="bi bi-star-fill" htmlFor="star5"></label>
                    <input
                      type="radio"
                      id="star4"
                      name="rating"
                      value={4}
                      onChange={handleStarClick}
                    />
                    <label className="bi bi-star-fill" htmlFor="star4"></label>
                    <input
                      type="radio"
                      id="star3"
                      name="rating"
                      value={3}
                      onChange={handleStarClick}
                    />
                    <label className="bi bi-star-fill" htmlFor="star3"></label>
                    <input
                      type="radio"
                      id="star2"
                      name="rating"
                      value={2}
                      onChange={handleStarClick}
                    />
                    <label className="bi bi-star-fill" htmlFor="star2"></label>
                    <input
                      type="radio"
                      id="star1"
                      name="rating"
                      value={1}
                      onChange={handleStarClick}
                    />
                    <label className="bi bi-star-fill" htmlFor="star1"></label>
                  </div>
                </div>
              </div>
            </form>
            {message}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentPopup;
