import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import ADD_ITEM_CONFIG from "../config/addItemConfig";

function ItemFormPage() {
    const { type, id } = useParams(); 
    const navigate = useNavigate();

    const config = ADD_ITEM_CONFIG[type];
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState({});
    const [courses, setCourses] = useState([]);

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
            setFormData(item)
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
        <fieldset>
            <legend>{isEdit ? `Edit ${config.title}` : `Add ${config.title}`}</legend>

            {config.fields.map(field => {
            if (field.type === "select") {
                return (
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
                );
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
        </fieldset>

        <button onClick={handleSubmit}>
            {isEdit ? "Update" : "Create"}
        </button>
        </>
    );
}

export default ItemFormPage;