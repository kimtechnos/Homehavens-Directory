import React, { useState } from "react";
import axios from "axios";
import "./reviews.css";
import { apiUrl } from "../../utils/config";


const Reviews = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const reviewData = { title, review, name };

    try {
      const response = await axios.post(`${apiUrl}/api/review`, reviewData);
      console.log("Review submitted successfully:", response.data);
      setTitle("");
      setReview("");
      setName("");
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Failed to submit the review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-form">
      <h2>Write a Review</h2>
      {success && (
        <div className="success-message">Review submitted successfully!</div>
      )}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-header">
          <h1 className="form-title">Submit Your Review</h1>
          <div className="form-underline"></div>
        </div>
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="title">Title for your review</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="review">Your Review</label>
            <textarea
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-submit-container">
          <button
            type="submit"
            className={`form-submit ${loading ? "form-submit-disabled" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;

