// Creating a promise
function fetchPromise() {
  return new Promise((resolve, reject) => {
    let x = 0;
    
    // The producing code (this may take some time)
    x = x + 5;

    if (x == 0) {
      resolve("OK");
    } else {
      reject("Error");
    }
  });
}

module.exports = fetchPromise;