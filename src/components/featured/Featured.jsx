import "./featured.scss";
import React, { useState, useEffect } from "react";
// import axios from "../axios/Axios";
import "react-circular-progressbar/dist/styles.css";
import GaugeComponent from "react-gauge-component";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// { year, quarter }
const Featured = () => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `/api/dashboard/target/?year=${year}&quarter=${quarter}`
  //       );
  //       setData(response.data);
  //       setLoading(false);
  //       // console.log("data", response.data);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [year, quarter]);

  // if (loading) {
  //   return (
  //     <Box sx={{ display: "flex" }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="featured">
      <div className="top">
        <div className="title">TARGET ACHIVED</div>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <GaugeComponent
            arc={{
              subArcs: [
                { limit: 20, color: "#EA4228", showTick: true },
                { limit: 40, color: "#F58B19", showTick: true },
                { limit: 60, color: "#F5CD19", showTick: true },
                { limit: 80, color: "#D2EE01", showTick: true },
                { limit: 100, color: "#88E605", showTick: true },
              ],
            }}
            value={40} // {data.percent}
            labels={{
              matchColorWithArc: true,
              valueLabel: {
                style: {
                  fontSize: "33px",
                  fontWeight: "200",
                  fill: "#000000",
                },
              },
            }}
          />
        </div>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">TARGET</div>
            <div className="itemResult">
              <div className="resultAmount">₹{5}L</div> {/*data.target*/}
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">ACHIVED</div>
            <div className="itemResult">
              <div className="resultAmount">₹{2}L</div> {/*data.achived*/}
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">REMAINING</div>
            <div className="itemResult">
              <div className="resultAmount">₹{3}L</div> {/*data.remaining*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
