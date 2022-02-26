import React from "react"

export default function EditForm() {
  return (
    <form>
      <input placeholder="name" />
      <input placeholder="price" />
      <select>
        <option value="fruits" selected>
          Fruits
        </option>
        <option value="vegetables">Vegetables</option>
        <option value="frozen">Frozen Foods</option>
        <option value="drinks">Drinks</option>
        <option value="meats">Meats</option>
        <option value="dairy">Dairy</option>
      </select>
    </form>
  )
}
