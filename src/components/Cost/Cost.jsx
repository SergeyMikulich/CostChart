import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton, TextField } from '@mui/material';
import './Cost.scss';
import { Exception } from 'sass';

function Cost({ costValue, onCostDelete, onCostChange }) {
    const [er, setEr] = useState({});
    const { name, cost, id } = costValue;

    const handleCostChange = (e) => {
        try {
            let value = e.target.value;
            let isValid = validateCost(value);
            if (!isValid) {
                throw new Exception("Cost cannot be negative");
            }
            onCostChange(id, value);
            setEr({ er: false });
        } catch {
            setEr({ er: true });
        }
        finally {
        }
    };

    const validateCost = (value) => {
        const isNonNegativeInteger = /^\d+$/.test(value);
        return isNonNegativeInteger || value === "";
    }
    const handleCostDelete = (id) => {
        onCostDelete(id);
    }

    return (
        <div className="cost">
            <p>{name}</p>
            <TextField error={er.er} id="standard-basic" label="Cost" variant="standard" value={cost} onChange={handleCostChange}
                onFocus={(e) => { e.target.select() }} />
            <IconButton color="secondary" aria-label="delete button" onClick={() => { handleCostDelete(id) }}>
                <DeleteOutlineIcon />
            </IconButton>
        </div>
    )
}

export default Cost;
