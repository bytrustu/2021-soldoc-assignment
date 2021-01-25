export const range = (length, init = 0) => [...Array(length).keys()].map(i => i + init);

export const generateTimeRange = (startTime, endTime) => {
  const timeArray = [];
  range(48, 0).forEach(el => {
    timeArray.push(`${String(Math.floor(el / 2)).padStart(2, '0')}:${el % 2 === 0 ? '00' : '30'}`);
  });
  return timeArray.slice(
    timeArray.findIndex(el => el === startTime),
    timeArray.findIndex(el => el === endTime) + 1,
  );
};

export const getByte = (str = '') => {
  let byte = 0;
  for (let i = 0; i < str.length; i++) {
    (str.charCodeAt(i) > 127) ? byte += 2 : byte++;
  }
  return byte;
};

export const setTextByLimitByte = (str = '', limit) => {
  let byte = 0;
  let isLimit = false;
  for (let i = 0; i < str.length; i++) {
    if (!isLimit) {
      (str.charCodeAt(i) > 127) ? byte += 2 : byte++;
      if (byte > limit) {
        str = str.slice(0, i);
        isLimit = true;
      }
    }
  }
  return str;
};