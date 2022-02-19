import "./App.css";
import Bar from "./components/Bar/Bar";
import BmiForm from "./components/BmiForm/BmiForm";
import { getData, storeData } from "./helpers/localStorage";
import Info from "./components/Info/Info";
import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";

function App() {
    const initialData = () => getData("data") || [];
    const [data, setData] = useState(initialData);

    useEffect(() => {
        storeData("data", data);
    }, [data]);

    const handleCalculatorBMI = (value) => {
        const { weight, height } = value;
        value.bmi = (weight / ((height * height) / 10000)).toFixed(2);
        value.id = uuidv4();
        setData([...data, value]);
    };

    const handleDelete = (id) => {
        storeData("lastData", data);
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    };

    const handleUndo = () => {
        setData(getData("lastData"));
    };

    return (
        <>
            <div className="app">
                <div className="grid">
                    <h1 className="app__title text--center ">Tracker BMI</h1>
                    <div className="app__body">
                        <div className="grid__row">
                            <div className="grid__col-4">
                                <BmiForm calculateBmi={handleCalculatorBMI} />
                            </div>
                            <div className="grid__col-8">
                                <Bar
                                    labelData={data.map((obj) => obj.date)}
                                    bmiData={data.map((obj) => obj.bmi)}
                                />
                            </div>
                        </div>
                        <div className="app__history">
                            <div className="app__history-header">
                                <h1 className="app__history-title">
                                    History for 7 timer
                                </h1>
                                <button
                                    className="btn btn--secondary"
                                    disabled={data.length === 7}
                                    onClick={handleUndo}
                                >
                                    Undo
                                </button>
                            </div>
                            <div className="app__history-list grid__row">
                                {data &&
                                    data.map((info) => (
                                        <div
                                            key={info.id}
                                            className="grid__col-3"
                                        >
                                            <Info
                                                id={info.id}
                                                bmi={info.bmi}
                                                weight={info.weight}
                                                height={info.height}
                                                date={info.date}
                                                handleDelete={handleDelete}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
