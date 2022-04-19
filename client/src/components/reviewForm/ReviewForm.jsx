import {useState} from "react"
import {Rating} from "react-simple-star-rating"
import "./reviewForm.css"

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [readonly, setReadonly] = useState(false)
  const handleRating = (rate) => {
    setRating(rate / 20)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setRating(0)
  }

  return (
    <div>
      <form className="review-form">
        <label>Review this product</label>
        <br />
        <textarea rows="20" placeholder="Please leave your review here"></textarea>
        <br />
      </form>
      <div>
        <Rating onClick={handleRating} ratingValue={rating} fillColorArray={["#f50b0b", "#f4562a", "#f27a2a", "#f1b345", "#f1d045"]} readonly={readonly} allowHalfIcon />
        <p>{rating} stars</p>
      </div>
    </div>
  )
}
