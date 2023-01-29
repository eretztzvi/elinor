const express = require("express");
const todosLogic = require("../logic/todos.logic");
const { sayHello, sayGoodbye } = require("../middleware/sayHello");
const router = express();

router.get("/", sayHello, sayGoodbye, async (request, response) => {
  try {
    console.log(123)
    const todos = await todosLogic.getAllTodosAsync();
    response.json(todos);
  } catch (err) {
    response.status(500).send(err);
  }
});

router.get("/hello", sayHello, sayGoodbye, async (request, response) => {
  try {
    response.json({ msg: "hello!!!" });
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
