const express = require("express");
const app = express();
const port = 3000;

let { selectAllUser } = require("./user");

// app.get("/", (req, res) => {
//   const msg = { message: "Hello World" };
//   res.json(msg);
// });

app.get("/user", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
heloo world


bchbchbcbc
