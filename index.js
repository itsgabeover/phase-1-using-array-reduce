const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (accum, currentValue) => accum + currentValue;
const totalBatteries = batteryBatches.reduce(reducer);


