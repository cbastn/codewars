

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return (Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1);
}

console.log(findNextSquare(121), 144, "Wrong output for 121");
console.log(findNextSquare(155), -1, "Wrong output for 155");