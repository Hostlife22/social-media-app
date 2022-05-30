const sortDate = (firstDate: Date, secondDate: Date): number => {
  const timeFirst = firstDate.getTime();
  const timeSecond = secondDate.getTime();

  if (timeFirst === timeSecond) {
    return 0;
  }

  return timeFirst > timeSecond ? 1 : -1;
};

export default sortDate;
