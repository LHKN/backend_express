import express from "express";
const app = express();
const port = 3000;

import customerRouter from "./router/customer.router.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(customerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
