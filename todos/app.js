const express = require("express");

const todosController = require("./controllers/todos.controller");

const app = express();

app.use("/todos", todosController);

const port = 4005;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
