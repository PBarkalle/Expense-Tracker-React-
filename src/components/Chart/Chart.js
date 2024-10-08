import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValue = props.dataItems.map((dataItem) => dataItem.value);
    //max requires individual numbers and not an array,so we use spread operator to individually pass 12 values
    const totalMax = Math.max(...dataPointValue);
    
    return (
    <div className="chart">
      {props.dataItems.map((dataItem) => (
        <ChartBar
          key={dataItem.label}
          value={dataItem.value}
          maxValue={totalMax}
          label={dataItem.label}
        />
      ))}
    </div>
  );
};

export default Chart;
