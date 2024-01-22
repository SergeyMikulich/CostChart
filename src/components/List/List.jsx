import React, { useEffect, useState } from 'react';
import Cost from '../Cost/Cost';

function List({ recordsUpdated, setCosts, onCostChange, onCostDelete}) {
    const [costs, setStoredCosts] = useState([]);
    useEffect(() => {
        const storedCosts = JSON.parse(localStorage.getItem("costs"));
        if (storedCosts) {
            setStoredCosts(storedCosts);
            setCosts(storedCosts);
        }
    }, [recordsUpdated]);

    const handleDelete = (id) => {
        const newCosts = costs.filter((cost) => cost.id !== id);
        setCosts(newCosts);
        localStorage.setItem("costs", JSON.stringify(newCosts));

        onCostDelete();
    }

    const handleChange = (id, newCost) => {
        const updatedCosts = costs.map(cost => (cost.id === id ? { ...cost, cost: newCost } : cost));
        setCosts(updatedCosts);
        localStorage.setItem("costs", JSON.stringify(updatedCosts));

        onCostChange();
    }

    return (
        <div className="cost-list">
            <h1>Costs:</h1>
            {costs.map((cost) => (
                <Cost
                    costValue={cost}
                    onCostDelete={handleDelete}
                    onCostChange={handleChange}
                    key={cost.id}
                />
            ))}
        </div>
    );
}

export default List;
