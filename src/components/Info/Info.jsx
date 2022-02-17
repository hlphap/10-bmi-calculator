import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Info.module.css';

const Info = ({ weight, height, id, date, bmi, deleteCard }) => {
    const handleDelete = () => {
        deleteCard(id)
    }

    return (
        <>
            <div className="col m6 s12">
                <div className={clsx(styles.card, 'card')}>
                    <div className={clsx(styles.cardContent, 'card-content')}>
                        <span className={clsx(styles.cardTitle, 'card-title')} data-test='bmi'>BMI: {bmi}</span>
                        <div className={clsx(styles.cardData, 'card-data')}>
                            <span data-test="weight">Weight: {weight} kg</span>
                            <span data-test="height">Height: {height} cm</span>
                            <span data-test="date">Date: {date}</span>
                        </div>
                        <button className={styles.deleteBtn} onClick={handleDelete}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


Info.propTypes = {
    weight: PropTypes.string,
    height: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.string,
    bmi: PropTypes.string,
    deleteCard: PropTypes.func
};


export default Info;