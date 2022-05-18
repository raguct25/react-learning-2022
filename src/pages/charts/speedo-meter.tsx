import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";

export interface SpeedoMeterPage {}

const SpeedoMeter: React.FunctionComponent<SpeedoMeterPage> = (props) => {
  console.log("About props", props);
  const navigate = useNavigate();

  const [needleValue, setNeedleValue] = useState(2500);

  //   const handleNeedleValue = () => {
  //     const maxValue = needleValue > 10000 ? 10000 : needleValue;
  //     console.log("max value", maxValue);

  //     return maxValue;
  //   };

  const isNagativeNeedleValue = () => {
    if (needleValue > 0) {
      return needleValue;
    } else {
      return 2;
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Speedo Meter</h2>
      <button onClick={() => navigate("/")} className="m-3">
        {" "}
        Back
      </button>
      <br />
      <div>
        <ReactSpeedometer
          value={needleValue > 10000 ? 10000 : isNagativeNeedleValue()}
          minValue={2}
          maxValue={10000}
          segments={4}
          segmentColors={["#B03A2E", "#148F77", "#B7950B", "#B03A2E"]}
          customSegmentStops={[2, 1000, 2000, 4000, 10000]}
          forceRender={true}
          currentValueText={needleValue > 0 ? `${needleValue} Ω` : "-"}
          needleColor="black"
          needleHeightRatio={0.9}
          width={500}
          paddingHorizontal={250}
          ringWidth={40}
          textColor="black"
        />
      </div>

      {/* <div
        style={{
          width: "500px",
          height: "700px",
        }}
      >
        <ReactSpeedometer
          fluidWidth={true}
          minValue={100}
          maxValue={500}
          value={473}
          needleColor="steelblue"
          textColor={'red'}
        />
      </div> */}
      <h2>test</h2>
    </div>
  );
};

export default SpeedoMeter;

// const styles = {
//     title: {
//       fontSize: "1em",
//       color: "#000",
//     },
//   };
