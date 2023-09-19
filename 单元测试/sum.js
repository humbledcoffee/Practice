export function sum(...rest) {
  if (!rest || !rest.length) {
    return 0;
  } else {
    let sum = rest.reduce((pre, cur) => {
      return (pre += cur);
    });
    return sum;
  }
}
