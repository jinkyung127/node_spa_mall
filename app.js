const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");

const connect = require("./schemas");
connect();

// body 파서 미들웨어를 쓰기위한 문법 -> app.use -> 전역미들웨어에 적용하겠다
app.use(express.json());

app.use("/api", [goodsRouter, cartsRouter]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/goods/:goodsId/cart", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

// const exp = require("constants");

//   res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
// });

// app.get("/", (req, res) => {
//   console.log(req.query);

//   res.send("정상적으로 반환되었습니다.");
// });

// app.get("/", (req, res) => {
//   console.log(req.query);

// const obj = {
//   KeyKey: "value입니다.",
//   이름입니다: "이름일까요?",
// };

//   res.status(400).json({
//     KeyKey: "value입니다.",
//     이름입니다: "이름일까요?",
//   });
// });

// app.get("/:id", (req, res) => {
//   console.log(req.params);

//   res.send(":id URL에 정상적으로 반환되었습니다.");
// });

// localhost3000/api -> goodsRouter
// app.use("/api", goodsRouter);
