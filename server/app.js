import express from "express";
const app = express();

const port = 5000;
import "./connect.js";
import userRouter from "./controller/user/index.js";
import billRouter from "./controller/bill/index.js";
app.use(express.json());

// // app.use(express.static("build"));
app.use("/api/users", userRouter);
app.use("/api/bills", billRouter);
app.get("/", (req, res) => {
  res.send("<h1>Hello Everyone from Node via Nginx</h1>");
});

app.listen(port, () => {
  console.log("Server started at ", port);
});
