const p = require("phin");

(async () => {
  const res = await p("https://unversed-hd-test-1.herokuapp.com/");
  console.log(res.statusCode === 200);
})();
