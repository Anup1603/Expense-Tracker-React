import React from "react";
import "./Chart.css";
import ChartsBar from "./ChartsBar";

const Charts = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartsBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
