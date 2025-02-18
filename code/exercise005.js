function drawACross(n) {
  if (n < 3) {
    return "Not possible to draw cross for grids less than 3x3!";
  } else if (n % 2 === 0) {
    return "Centered cross not possible!";
  }

  let cross = [];
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        row += "x";
      } else {
        row += " ";
      }
    }
    cross.push(row);
  }
  return cross.join("\n");
}

// Example usage:
console.log(drawACross(15));
console.log(drawACross(3));
