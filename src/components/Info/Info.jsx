import "./Info.css";

function Info({ id, bmi, weight, height, date, handleDelete }) {
    const handleClick = () => {
        handleDelete(id);
    };
    return (
        <div className="info">
            <h3 className="info__title text--center">BMI: {bmi}</h3>
            <div className="info__wrap">
                <span className="info__field">Weight: {weight}</span>
                <span className="info__field">Height: {height}</span>
                <span className="info__field">Date: {date}</span>
            </div>
            <button onClick={handleClick} className="info__delete">
                x
            </button>
        </div>
    );
}

export default Info;
