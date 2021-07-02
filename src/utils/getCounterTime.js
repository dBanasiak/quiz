export const getCounterTime = (counter) => {
  const hours = Math.floor(counter/3600);
  const minutes = Math.floor(counter/60);
  const seconds = counter - minutes * 60;

  const prettyPrintTime = (time) => (
    time > 9 ? time : `0${time}`
  );

  return `${prettyPrintTime(hours)}:${prettyPrintTime(minutes)}:${prettyPrintTime(seconds)}`;
};
