import Chart from './components/Chart/Chart';
import Input from './components/Input/Input';
import List from './components/List/List';
import React, { useState } from 'react';
import './assets/styles/main.scss';

function App() {
  const [costs, setCosts] = useState([]);
  const [recordsUpdated, setRecordsUpdated] = useState(0);

  const updateList = () => {
    setRecordsUpdated(recordsUpdated + 1);
  };
  const onAddHandler = async (inputValue) => {
    updateList();
    console.log("onAddHandler", inputValue);
  };

  const onCostChangeHandler = () => {
    updateList();
  };
  const onCostDeleteHandler = () => {
    updateList();
  };

  return (
    <div className="chart-app">
      <div className="container">
        <div className="cost-info">
          <Input onAdd={onAddHandler} />
          <List recordsUpdated={recordsUpdated} setCosts={setCosts} onCostChange={onCostChangeHandler} onCostDelete={onCostDeleteHandler} />
        </div>
        <Chart costs={costs} recordsUpdated={recordsUpdated} />
      </div>
    </div>
  );
}

export default App;
