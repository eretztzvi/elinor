const express = require("express");
const todosLogic = require("../logic/todos.logic");

const router = express();

router.get("/", async (request, response) => {
  try {
    const todos = await todosLogic.getAllTodosAsync();
    response.json(todos);
  } catch (err) {
    response.status(500).send(err);
  }
});

router.get("/hello", async (request, response) => {
  try {
    response.json({msg: "hello!!!"});
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
