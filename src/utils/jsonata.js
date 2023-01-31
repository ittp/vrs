import jsonata from "jsonata";

const evaluate = (rule, data) => {
  const filteredData = jsonata(rule).evaluate(data);

  if (!Array.isArray(filteredData)) {
    return filteredData ? [filteredData] : [];
  }

  return filteredData;
};

export const JsonataUtil = {
  EVALUATE: evaluate
};
