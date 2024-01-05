// (A) Create a promise
const p = new Promise((resolve, reject) => {
  let condition = true;
  // Do some async task
  setTimeout(() => {
    if (condition) {
      resolve("Successful login");
    } else {
      reject("Login failed");
    }
  }, 2000);
});

// (B) Using a promise
p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
