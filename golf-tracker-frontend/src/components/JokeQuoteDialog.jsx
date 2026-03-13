function JokeQuoteDialog({ isOpen, message, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <p>{message}</p>
                <button className="btn-confirm" onClick={onCancel}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default JokeQuoteDialog