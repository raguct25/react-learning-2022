import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GaugeChart from "react-gauge-chart";

export interface AboutPage {}

const About: React.FunctionComponent<AboutPage> = (props) => {
  console.log("About props", props);

  const { aboutID } = useParams();

  const navigate = useNavigate();

  console.log("aboutID", aboutID);

  const [value, setValue] = useState([1, 1, 1, 1]);

  const styles = {
    dial: {
      display: "inline-block",
      width: `300px`,
      height: `auto`,
      color: "#000",
      border: "0.5px solid #fff",
      padding: "2px",
    },
    title: {
      fontSize: "1em",
      color: "#000",
    },
  };

  // setInterval(() => {
  //   setValue([10, 30, 70, 50]);
  // }, 5000);

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => navigate("/profile")}> navigate profile</button>

      <div style={styles.dial}>
        <GaugeChart
          animate={true}
          cornerRadius={0}
          arcsLength={value}
          colors={["#B03A2E", "blue", "#B7950B", "#B03A2E"]}
          arcPadding={0}
          percent={0.75}
          textColor={"pink"}
          needleColor={"orange"}
          arcWidth={0.2}
        />
      </div>
    </div>
  );
};

export default About;

// nrOfLevels={4}

//    <GaugeChart id="gauge-chart1" /> */

//    <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} /> */

//    <GaugeChart
//           id="gauge-chart3"
//           nrOfLevels={3}
//           colors={["#FF5F6D", "#FFC371"]}
//           arcWidth={0.7}
//           percent={0.87}
//         />

//<GaugeChart
//id="gauge-chart4"
//nrOfLevels={10}
//arcPadding={0.2}
//cornerRadius={0}
//percent={0.6}
///>;
