export function suffixer(int) {
  let mod = int < 20 ? Math.round(int) % 20 : Math.round(int) % 10;
  return mod == 1 ? 'st' : mod == 2 ? 'nd' : mod == 3 ? 'rd' : 'th';
}

export function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function makeSum(values) {
  return values ? values.reduce((a, b) => a + b) : 0;
}