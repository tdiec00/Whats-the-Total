import React from "react"
import AddProduct from "../addProduct/AddProduct"

export default function ProductModal() {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-body">
              <AddProduct />
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
