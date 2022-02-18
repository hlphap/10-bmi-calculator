import { useState } from "react";
import PropTypes from 'prop-types';

import styles from './BmiForm.module.css'

const initialFormData = {
    weight: '',
    height: '',
    date: '',
}
function BmiForm({ change }) {
    const [formData, setFormData] = useState(initialFormData);

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        if (value > 999) {
            value = 999;
        }
        const date = new Date().toLocaleString().split(',')[0];
        const newFormData = {
            ...formData,
            [name]: value.toString(),
            date,
        }
        setFormData(newFormData);
    }

    const handleSubmit = () => {
        change(formData);
        setFormData(initialFormData);
    }

    return (
        <>
            <div className="bmiForm">
                <div className="row">
                    <div className="col m6 s12">
                        <label className={styles.bmiForm__label} htmlFor="weight">Weight</label>
                        <input className={styles.bmiForm__input} type="number" name='weight' value={formData.weight} onChange={handleOnChange} />
                    </div>
                    <div className="col m6 s12">
                        <label className={styles.bmiForm__label} htmlFor="height">Height</label>
                        <input className={styles.bmiForm__input} type="number" name='height' value={formData.height} onChange={handleOnChange} />
                    </div>
                </div>
            </div>
            <div className="center">
                <button
                    className={styles.calculateBtn}
                    type='button'
                    onClick={handleSubmit}
                    disabled={formData.weight === '' || formData.height === ''}
                >Calculate</button>
            </div>
        </>
    );
}

BmiForm.propTypes = {
    change: PropTypes.func.isRequired,
};

export default BmiForm;
