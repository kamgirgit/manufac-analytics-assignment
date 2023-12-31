import React, { useState, useEffect } from "react";
import "./report.css";

import { wineData } from "../../data/data";
import { classWiseMean, classWiseMedian, classWiseMode } from "../../utils/analytics";

const Report = () => {
  const [meanData, setMeanData] = useState({});
  const [medianData, setMedianData] = useState({});
  const [modeData, setModeData] = useState({});

  useEffect(() => {
    setMeanData(classWiseMean(wineData));
    setMedianData(classWiseMedian(wineData));
    setModeData(classWiseMode(wineData));
  }, []);

  console.log(meanData);
  console.log(medianData);
  console.log(modeData);

  return (
    <div className='report-container'>
      <div>
        <h3 className='heading-text'>Statistical Measures of Wine Data :</h3>
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
            <th>Flavanoids Mean</th>
            {Object.keys(meanData).map((key, i) => (
              <td key={i}> {meanData[key]}</td>
            ))}
          </tr>
          <tr>
            <th>Flavanoids Median</th>
            {Object.keys(medianData).map((key, i) => (
              <td key={i}> {medianData[key]}</td>
            ))}
          </tr>
          <tr>
            <th>Flavanoids Mode</th>
            {Object.keys(modeData).map((key, i) => (
              <td key={i}> {modeData[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
