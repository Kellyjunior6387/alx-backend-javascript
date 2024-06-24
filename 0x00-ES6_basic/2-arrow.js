export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Function to use arrow function for the above function
  const addNeighborhood = (newNeighborhood) => (
    this.sanFranciscoNeighborhoods.push(newNeighborhood),
    this.sanFranciscoNeighborhoods
  )(); // Add parentheses to invoke the arrow function.
}
