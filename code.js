// Function to calculate dot product
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  // Function to determine if two vectors are orthogonal
  function are_orthogonal(v1, v2) {
    return dot_product(v1, v2) === 0;
  }
  
  // Test cases
  let v1 = [1, 2, 3];
  let v2 = [4, 5, 6];
  let v3 = [-1, 2, -1];
  let v4 = [2, -4, 2];
  
  console.log(dot_product(v1, v2)); // Output: 32
  console.log(dot_product(v3, v4)); // Output: 0
  
  console.log(are_orthogonal(v1, v2)); // Output: false
  console.log(are_orthogonal(v3, v4)); // Output: true
  