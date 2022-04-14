import "./reviewForm.css"

export default function ReviewForm() {
  return (
    <form className="review-form">
      <label>Add a new review</label>
      <br />
      <textarea rows="20" placeholder="Please leave your review here"></textarea>
      <br />
      <select>
        <option value="none">Rate this product</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </form>
  )
}
