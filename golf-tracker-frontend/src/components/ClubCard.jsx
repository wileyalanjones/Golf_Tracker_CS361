import "../App.css"
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

function ClubCard({id, type, brand, handleDelete, handleEdit, model=undefined, year=undefined}) {
    return (
        <div className="card club">
            <div className="card-header">
                <div className="club-info">
                    <strong>{type}</strong>
                    <div className="club-brand">
                        {brand}
                        {model && `, ${model}`}
                        {year && `, ${year}`}
                    </div>
                </div>
            </div>
            <div className="icon-group">
                <button
                    onClick={() => handleEdit("club", id)}
                    className="edit-btn">
                    <MdModeEdit />
                </button>

                <button
                    onClick={() => handleDelete(id, "clubs")}
                    className="delete-btn">
                    <MdDeleteForever />
                </button>
            </div>
        </div>
    )
}

export default ClubCard;
