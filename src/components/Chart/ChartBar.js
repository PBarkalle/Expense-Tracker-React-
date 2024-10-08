import "./ChartBar.css";

const ChartBar = (props) => {
  let barHeight = "0%";

  if (props.maxValue > 0)
    barHeight = (props.value / props.maxValue) * 100 + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* here style needs a js object to change that class's style dynamically */}
        <div
          className="chart-bar__fill"
          style={{
            height: barHeight,
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
