import "./BmiForm.css";

import { useState, useRef } from "react";

function BmiForm({ calculateBmi }) {
    const initialData = useRef({
        weight: "",
        height: "",
    });
    const [formData, setFormData] = useState(initialData.current);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (value > 200) value = 200;
        const date = new Date().toLocaleString().split(",")[0];
        const newData = {
            ...formData,
            [name]: value,
            date,
        };
        setFormData(newData);
    };

    const handleSubmit = () => {
        calculateBmi(formData);
        setFormData(initialData.current);
    };

    return (
        <>
            <div className="bmi-form">
                <h1 className="bmi-form__title">Information</h1>
                <div className="bmi-form__info">
                    <div className="bmi-form__wrap">
                        <label className="bmi-form__label" htmlFor="weight">
                            Weight
                        </label>
                        <input
                            name="weight"
                            placeholder="50kg"
                            className="bmi-form__input"
                            type="number"
                            value={formData.weight}
                            onChange={handleChange}
                            min="0"
                            max="200"
                        />
                    </div>
                    <div className="bmi-form__wrap">
                        <label className="bmi-form__label" htmlFor="weight">
                            Height
                        </label>
                        <input
                            name="height"
                            placeholder="160cm"
                            className="bmi-form__input"
                            type="number"
                            value={formData.height}
                            onChange={handleChange}
                            min="0"
                            max="200"
                        />
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="bmi-form__btn btn btn--primary"
                    disabled={!formData.weight || !formData.height}
                >
                    Calculate BMI
                </button>
            </div>
        </>
    );
}

export default BmiForm;
