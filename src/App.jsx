import styles from './App.module.css'

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { getData, storeData } from './helpers/localStorage'
import BmiForm from './components/BmiForm/BmiForm';
import Bar from './components/Bar/Bar';
import Info from './components/Info/Info';

function App() {
  const initialData = getData('data') ? getData('data') : [];
  const [data, setData] = useState(initialData);
  const [chart, setChart] = useState({});

  useEffect(() => {
    storeData('data', data)
    const date = data.map(obj => obj.date);
    const bmi = data.map(obj => obj.bmi);
    setChart({ date, bmi })
  }, [data])

  const handleChange = (info) => {
    let heightInM = info.height / 100;
    info.bmi = (info.weight / (heightInM * heightInM)).toFixed(2);
    info.id = uuidv4();
    const newData = [...data, info];
    setData(newData)
  }

  const handleDelete = (id) => {
    storeData('lastData', data);
    let newData = data.filter(data => data.id !== id);
    setData(newData)
  }

  const handleUndo = () => {
    setData(getData('lastData'));
  }

  return (
    <>
      <div className='container'>
        <div className='row center'>
          <h1 className='white-text'> BMI Tracker </h1>
        </div>
        <div className='row'>
          <div className='col m12 s12'>
            <BmiForm change={handleChange} />
            <Bar labelData={chart.date} bmiData={chart.bmi}></Bar>
          </div>
          <div className='row center'>
            <h4 className='white-text'>
              The Last 7 Times
            </h4>
            <div className='data-container row'>
              {(data.length > 0) ? (
                <>
                  {data.map(info => (
                    <Info
                      key={info.id}
                      id={info.id}
                      weight={info.weight}
                      height={info.height}
                      date={info.date}
                      bmi={info.bmi}
                      deleteCard={handleDelete}
                    />
                  ))}
                </>
              ) : (
                <div className='center white-text'>No log found</div>
              )}
            </div>
          </div>
          {getData('lastData') && (
            <div className='center'>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
