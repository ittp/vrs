import moment from "moment";

const dateSort = (a, b) => moment(a).diff(moment(b));

const defaultSort = (a, b) => {
  if (a < b) return -1;
  if (b < a) return 1;
  return 0;
};

export const SorterUtil = {
  DEFAULT: defaultSort,
  DATE: dateSort
};
