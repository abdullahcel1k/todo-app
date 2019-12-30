const TodoRepository = require('../repositories/TodoRepository');

class TodoRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    /**
     * All todo list method
     */
    this.router.get('/todo/todolist', async (req, res) => {
      const todosResult = await TodoRepository.GetAllTodos();
      res.send(todosResult);
    });

    /**
     * Get one todo
     */
    this.router.get('/todo/gettodo/:id', async (req, res) => {
      const todoResult = await TodoRepository.GetOneTodo(req.params.id);

      res.send(todoResult);
    });

    /**
     * Add todo
     */
    this.router.post('/todo/addtodo', async (req, res) => {
      const addTodoResult = await TodoRepository.AddTodo(req.body);

      res.send(addTodoResult);
    });

    /**
     * update todo
     */
    this.router.put('/todo/updatetodo/:id', async (req, res) => {
      const updateResult = await TodoRepository.UpdateTodo(req.params.id, req.body);

      res.send(updateResult);
    });

    /**
     * delete todo
     */
    this.router.put('/todo/deletetodo/:id', async (req, res) => {
      const deleteResult = await TodoRepository.SoftDelete(req.params.id);

      res.send(deleteResult);
    });
  }
}

module.exports = TodoRoute;
