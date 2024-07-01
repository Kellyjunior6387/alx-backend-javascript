export default function cleanSet(set, string) {
  if (string === '' || typeof string !== 'string') {
    return '';
  }
  const result = [];

  for (const x of set) {
    if (typeof x === 'string' && x.startsWith(string)) {
      result.push(x.slice(string.length));
    }
  }
  return result.join('-');
}
