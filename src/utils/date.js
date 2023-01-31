import moment from "moment";

const checkDateBetweenDates = (checkDate, startDate, endDate) => {
  const startDateFormatted = moment(new Date(startDate))
    .subtract(1, "days")
    .format("YYYY-MM-DD");

  const endDateFormatted = moment(new Date(endDate))
    .add(1, "days")
    .format("YYYY-MM-DD");

  const checkDateFormatted = moment(new Date(checkDate)).format("YYYY-MM-DD");

  const inRange = moment(checkDateFormatted).isBetween(
    startDateFormatted,
    endDateFormatted
  );

  return inRange;
};

export const DateUtil = {
  CHECK_DATE_BETWEENDATES: checkDateBetweenDates
};
