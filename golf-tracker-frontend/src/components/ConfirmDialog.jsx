function ConfirmDialog({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Confirm Delete</h3>
            <p>{message}</p>
            <div className="modal-buttons">
                <button className="btn-confirm" onClick={onConfirm}>
                    Delete
                </button>
                <button className="btn-cancel" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    </div>
  );
}

export default ConfirmDialog