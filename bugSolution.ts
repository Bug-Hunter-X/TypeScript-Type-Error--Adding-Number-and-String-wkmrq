function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string' || typeof b === 'string') {
    // Handle string case (e.g., convert to number if needed)
    const numA = typeof a === 'string' ? parseFloat(a) : a;
    const numB = typeof b === 'string' ? parseFloat(b) : b;
    return numA + numB;
  } else {
    return a + b;
  }
}

let result1 = addSafe(1, '2'); // Works correctly
let result2 = add(1, 2); //Works correctly
console.log(result1); // Output: 3
console.log(result2); //Output: 3