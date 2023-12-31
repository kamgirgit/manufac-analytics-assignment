export const classWiseMean = (wineData) => {
  const classes = Object.groupBy(wineData, (d) => d.Alcohol);
  let res = {};
  for (let key in classes) {
    let arr = classes[key];
    let flavanoids = arr.map((el) => Number(el.Flavanoids));
    res[key] = mean(flavanoids);
  }
  return res;
};

export const classWiseMedian = (wineData) => {
  const classes = Object.groupBy(wineData, (d) => d.Alcohol);
  let res = {};
  for (let key in classes) {
    let arr = classes[key];
    let flavanoids = arr.map((el) => Number(el.Flavanoids));
    res[key] = median(flavanoids);
  }
  return res;
};

export const classWiseMode = (wineData) => {
  const classes = Object.groupBy(wineData, (d) => d.Alcohol);
  let res = {};
  for (let key in classes) {
    let arr = classes[key];
    let flavanoids = arr.map((el) => Number(el.Flavanoids));
    res[key] = mode(flavanoids);
  }
  return res;
};

const getGammaDataSet = (wineData) => {
  const modifiedData = wineData.map((elem) => {
    let gamma = (elem.Ash * elem.Hue) / elem.Magnesium;
    return {
      ...elem,
      Gamma: gamma,
    };
  });
  return modifiedData;
};

export const gammaMean = (wineData) => {
  const modifiedData = getGammaDataSet(wineData);
  const classes = Object.groupBy(modifiedData, (d) => d.Alcohol);
  let res = {};
  for (let key in classes) {
    let arr = classes[key];
    let gammas = arr.map((el) => Number(el.Gamma));
    res[key] = mean(gammas);
  }
  return res;
};

export const gammaMedian = (wineData) => {
  const modifiedData = getGammaDataSet(wineData);
  const classes = Object.groupBy(modifiedData, (d) => d.Alcohol);
  let res = {};
  for (let key in classes) {
    let arr = classes[key];
    let gammas = arr.map((el) => Number(el.Gamma));
    res[key] = median(gammas);
  }
  return res;
};

export const gammaMode = (wineData) => {
  const modifiedData = getGammaDataSet(wineData);
  const classes = Object.groupBy(modifiedData, (d) => d.Alcohol);
  let res = {};
  for (let key in classes) {
    let arr = classes[key];
    let gammas = arr.map((el) => Number(el.Gamma));
    res[key] = mode(gammas);
  }
  return res;
};

/* 
 Statistical Formulas
*/

const mean = (arr) => {
  let total = arr.reduce((current, acc) => current + acc, 0);
  return (total / arr.length).toFixed(3);
};

const median = (arr) => {
  const { length } = arr;
  arr.sort((a, b) => a - b);
  if (length % 2 === 0) {
    return ((arr[length / 2 - 1] + arr[length / 2]) / 2).toFixed(3);
  }
  return arr[(length - 1) / 2].toFixed(3);
};

const mode = (arr) => {
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max.toFixed(3);
};
