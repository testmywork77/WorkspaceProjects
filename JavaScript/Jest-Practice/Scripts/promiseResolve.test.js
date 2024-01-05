const fetchPromise = require("./promiseResolve.js");

test("fetchPromise success", () => {
  return expect(fetchPromise()).resolves.toBe("OK");
});
