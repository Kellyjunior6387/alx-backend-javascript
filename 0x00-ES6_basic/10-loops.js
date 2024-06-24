export default function appendToEachArrayValue(array, appendString) {
  const new_Array = [];
  for (const x of array) {
    new_Array.push(appendString + x);
  }

  return new_Array;
}
