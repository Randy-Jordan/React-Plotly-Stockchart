class Trace {
  constructor(x, high, low, open, close) {
    this.x = x;
    this.high = high;
    this.low = low;
    this.open = open;
    this.close = close;
  }

  decreasing = { line: { color: '#b21e35' } };

  increasing = { line: { color: '#008000' } };

  line = { color: 'rgba(31,119,180,1)' };

  type = 'candlestick';

  xaxis = 'x';

  yaxis = 'y';
}

export function createTrace(data) {
  const x = [];
  const high = [];
  const low = [];
  const open = [];
  const close = [];
  try {
    Object.entries(data['Time Series (Daily)']).forEach((entry) => {
      x.push(entry[0]);
      high.push(entry[1]['2. high']);
      low.push(entry[1]['3. low']);
      open.push(entry[1]['1. open']);
      close.push(entry[1]['4. close']);
    });
  } catch (error) {
    console.log(error);
  }
  const trace = new Trace(x, high, low, open, close);
  return trace;
}


