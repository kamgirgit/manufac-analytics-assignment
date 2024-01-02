import React, { useState, useEffect } from "react";
import "./gamma.css";

import { wineData } from "../../data/data";
import { gammaMean, gammaMedian, gammaMode } from "../../utils/analytics";

const GammaReport = () => {
  const [meanData, setMeanData] = useState({});
  const [medianData, setMedianData] = useState({});
  const [modeData, setModeData] = useState({});

  useEffect(() => {
    setMeanData(gammaMean(wineData));
    setMedianData(gammaMedian(wineData));
    setModeData(gammaMode(wineData));
  }, []);

  return (
    <div className='report-container'>
      <div>
        <h3 className='heading-text'>Statistical Measures of Gamma Property :</h3>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Gamma Mean</th>
            {Object.keys(meanData).map((key, i) => (
              <td key={i}> {meanData[key]}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Median</th>
            {Object.keys(medianData).map((key, i) => (
              <td key={i}> {medianData[key]}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Mode</th>
            {Object.keys(modeData).map((key, i) => (
              <td key={i}> {modeData[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaReport;
