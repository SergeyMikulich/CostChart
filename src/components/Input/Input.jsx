import { IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './Input.scss';

function Input({ onAdd }) {
  const initialInputState = {
    name: "",
    cost: 0,
    id: 0
  };

  const [inputValue, setInputValue] = useState(initialInputState);


  const handleAddClick = async () => {
    if (!inputValue.name) {
      return;
    }
    await localStorage.setItem('costs', JSON.stringify([...JSON.parse(localStorage.getItem('costs')) || [], inputValue]));
    await onAdd(inputValue);
    setInputValue(initialInputState);
  };

  const onInputChange = (e) => {
    const existingCosts = JSON.parse(localStorage.getItem('costs')) || [];
    const id = existingCosts.length > 0 ? Math.max(...existingCosts.map(cost => cost.id)) + 1 : 1;
    setInputValue({ ...inputValue, name: e.target.value, id: id })
  };

  return (
    <div className="chart-input">
      <TextField id="standard-basic" label="Cost name" variant="standard" value={inputValue.name} onChange={(e) => onInputChange(e)} />
      <IconButton color="secondary" aria-label="add button" onClick={handleAddClick}>
        <AddIcon />
      </IconButton>
    </div>
  )
}

export default Input;
