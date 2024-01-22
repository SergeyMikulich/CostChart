import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Chart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ costs, recordsUpdated }) => {
    const initializedChart = {
        labels: [],
        datasets: [{
            data: [],
            label: "Cost chart",
            backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600", "#bf6615", "yellow", "pink"],
            hoverBackgroundColor: ["#175000", "#003350", "#993d00"],
        }],
    }
    const [pieChartData, setPieChartData] = useState(initializedChart);

    const [options, setOptions] = useState({
        title: {
            display: true,
            text: "Costs Chart",
            fontSize: 15,
        },
        legend: {
            display: true,
            position: "top",
        },
        width: 10,
        height: 10,
    });

    useEffect(() => {
        if (costs.length === 0) {
            setPieChartData(initializedChart);
            return;
        }

        const labels = costs.map((cost) => cost.name);

        const newPieChartData = {
            labels: labels,
            datasets: [{
                data: costs.map((cost) => cost.cost),
                label: "Cost chart",
                backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600", "#bf6615", "yellow", "pink"],
                hoverBackgroundColor: ["#175000", "#003350", "#993d00"],
            }],
        };

        setPieChartData(newPieChartData);
    }, [costs, recordsUpdated]);

    return (
        <div className="chart">
            <Doughnut data={pieChartData} options={options}/>;
        </div>
    )
};

export default Chart;
