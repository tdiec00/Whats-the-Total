import EditForm from "../editButton/editForm/EditForm"
import "./editProductModal.css"

export default function EditProductModal(props) {
  return (
    <div className="modal" onClick={() => props.setToggleEdit((prevToggle) => !prevToggle)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-body">
            <EditForm />
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
