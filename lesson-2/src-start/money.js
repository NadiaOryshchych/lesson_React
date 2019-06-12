let sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

const calcCash = (own = 0, ...arr) => {
  [arr] = arr;
  const res = (arr.reduce((total, current) => total + current)) + own;
  return res
}

let {cash, eu, rus} = sponsors;

let money = calcCash(null, cash);

export {eu, rus};
export default money;