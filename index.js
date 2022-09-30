const cors= require('cors')
const express = require("express");
const app = express();
const port = 3000;
const carritoRouter= require("./routes/carrito")
const productosRouter = require("./routes/productos");
var authRouter = require('./routes/auth');
app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/', authRouter);
app.use("/productos", productosRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.use("/carrito", carritoRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});