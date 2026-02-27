import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import ADD_ITEM_CONFIG from "../config/addItemConfig";
import { states } from "../config/utils.js"

function ItemFormPage() {
    const { type, id } = useParams(); 
    const navigate = useNavigate();

    const config = ADD_ITEM_CONFIG[type];
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState({});
    const [courses, setCourses] = useState([]);

    const [isHelpVisible, setIsHelpVisible] = useState(false)

    useEffect(() => {
        if (type === "round") {
            const getCourses = async () => {
                const response = await fetch("http://localhost:3000/courses") 
                const data = await response.json();
                setCourses(data);;
        }
        getCourses();
    }
    }, [type]);

    useEffect(() => {
        if (!isEdit) return;

        const loadItem = async () => {
            const response = await fetch(config.getEndpoint(id));
            const item = await response.json();
            if (type === 'round') {
                setFormData({
                ...item, 
                course: item.course._id,
                date: item.date 
                    ? new Date(item.date).toISOString().split("T")[0]
                    : ""
            })
            }
            else {
                setFormData(item)
            }
        } 
        loadItem();
    }, [isEdit, id, config]);

    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const url = isEdit
        ? config.putEndpoint(id)
        : config.postEndpoint;

        const method = isEdit ? "PUT" : "POST";

        const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
        });

    if (!response.ok) {
        alert("Failed to save");
        return;
    }

    navigate("/home");

  };

    return (
        <>
            <Navigation />
            <div className='form-container'>
                <h1 className="form-title">{isEdit ? `Edit ${config.title}` : `Add ${config.title}`}</h1>
                <fieldset className="form-fieldset" 
                    style={{backgroundColor: config.backgroundColor}}>
                    {config.fields.map(field => {
                    if (field.type === "select" && field.label === "Course") {
                        return (
                        <div>  
                            <select
                                key={field.name}
                                value={formData[field.name] || ""}
                                onChange={e => handleChange(field.name, e.target.value)}
                            >
                                <option value="">Select</option>
                                {courses.map(c => (
                                <option key={c._id} value={c._id}>
                                    {c.name}
                                </option>
                                ))}
                            </select>
                        </div>
                        );
                    }
                    if (field.type === "select" && field.label === "State (Abbr)") {
                        return (
                        <div>
                            <select
                                key={field.name}
                                value={formData[field.name] || ""}
                                onChange={e => handleChange(field.name, e.target.value)}
                            >
                                <option value="">Select a state</option>
                                {states.map(state => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                                ))}
                            </select>
                        </div>
                        )
                    }

                    return (
                        <input
                            key={field.name}
                            type={field.type}
                            value={formData[field.name] ?? ""}
                            placeholder={field.label}
                            onChange={e =>
                                handleChange(
                                field.name,
                                field.type === "number"
                                    ? e.target.valueAsNumber
                                    : e.target.value
                                )
                        }
                        />
                    );
                    })}
                    <button onClick={() => setIsHelpVisible(!isHelpVisible)} className="help-btn">
                        {isHelpVisible ? "Hide Help" : "Need Help?"}                    
                    </button>
                </fieldset>
            </div>
            <button className="form-submit-btn" onClick={handleSubmit} >
                {isEdit ? "UPDATE" : "CREATE"}
            </button>
                        <div className="help-info">
                {isHelpVisible && (
                    <div>
                        {config.help.map((help, i) => {
                            return (
                                <p key={i}>{help}</p>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default ItemFormPage;