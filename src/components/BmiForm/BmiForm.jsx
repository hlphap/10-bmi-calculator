import { useState } from "react";
import PropTypes from 'prop-types';

import styles from './BmiForm.module.css'

const initialValues = {
    weight: "",
    height: "",
    date: "",
};

function BmiForm({ change }) {
    const [state, setState] = useState(initialValues);

    const handleChange = (e) => {
        let { value, name } = e.target;
        if (value > 999) {
            value = "999";
        }

        const date = new Date().toLocaleString().split(",")[0]; // Find
        setState({
            ...state,
            [name]: value,
            date,
        });
    };

    const handleSubmit = (e) => {
        change(state);
        setState(initialValues);
    }

    return (
        <>
            <div className="bmiForm">
                <div className="row">
                    <div className="col m6 s12">
                        <label className={styles.bmiForm__label} htmlFor="weight">Weight (in kg)</label>
                        <input
                            id="weight"
                            className={styles.bmiForm__input}
                            type="number"
                            name="weight"
                            min="1"
                            max="999"
                            placeholder="50"
                            value={state.weight}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col m6 s12">
                        <label className={styles.bmiForm__label} htmlFor="height">Height (in cm)</label>
                        <input
                            id="height"
                            className={styles.bmiForm__input}
                            name="height"
                            type="number"
                            min="1"
                            max="999"
                            placeholder="176"
                            value={state.height}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="center">
                    <button
                        id="bmi-btn"
                        className={styles.calculateBtn}
                        type="button"
                        disabled={state.weight === "" || state.height === ""}
                        onClick={handleSubmit}
                    >
                        Calculate BMI
                    </button>
                </div>
            </div>
        </>
    );
}

BmiForm.propTypes = {
    change: PropTypes.func.isRequired,
};

export default BmiForm;
