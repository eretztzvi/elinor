const todos = require("../data/todos.json");

const changeAllCompleteToFalse = async (status) => {
  return new Promise((resolve, reject) => {

    const modifiedTodos = todos.map((todo) => {
      return {
        ...todo,
        completed: false,
      };
    });

    if(status){
        resolve(modifiedTodos);
    }else{
        reject({error_message: "I am an error message!!!"})
    }
  });
};

const getAllTodosAsync = async () => {
  try {
    const todos = await changeAllCompleteToFalse(true);
    return todos;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllTodosAsync,
};
