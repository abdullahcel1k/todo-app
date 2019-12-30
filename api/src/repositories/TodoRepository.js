const TodoModel = require('../models/TodoModel');
const ApiResponse = require('../models/ApiResponse');

class TodoRepository {
  /**
   * @param {Todo} todo
   * @returns {object}
   */
  static AddTodo(todo) {
    const addTodoPromise = TodoModel.create(todo);

    return addTodoPromise.then(
      (todoListResult) => new ApiResponse(true, 200, 'Görevler başarılı bir şekilde listelendi.', todoListResult, {})
    ).catch(
      (err) => new ApiResponse(true, 500, 'Görevler listelenirken bir hata oluştu.', {}, err)
    );
  }

  /**
   * @param {number} id
   * @param {Todo} todo
   * @returns {object}
   */
  static UpdateTodo(id, todo) {
    const todoUpdatePromise = TodoModel.findByIdAndUpdate(
      id,
      todo,
      {
        new: true
      }
    );

    return todoUpdatePromise.then(
      (updateResult) => new ApiResponse(true, 200, 'Görev başarılı bir şekilde güncellendi.', updateResult, {})
    ).catch(
      (err) => new ApiResponse(false, 500, 'Görev güncellenirken bir hata oluştu.', {}, err)
    );
  }

  /**
   * @param {number} id
   * @return {todo}
   */
  static GetOneTodo(id) {
    const todoPromise = TodoModel.findById(id);

    return todoPromise.then(
      (todoResult) => new ApiResponse(true, 200, 'Görev başarılı bir şekilde getirildi.', todoResult, {})
    ).catch(
      (err) => new ApiResponse(false, 500, 'Görev getirilirken bir hata oluştu.', {}, err)
    );
  }

  /**
   * @return {Array<Todo>}
   */
  static GetAllTodos() {
    const todosPromise = TodoModel.aggregate([
      {
        $match: {
          isDelete: false
        }
      },
      {
        $group: {
          _id: '$status',
          todos: {
            $push: '$$ROOT'
          }
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      }
    ]);
    return todosPromise.then(
      (todoResult) => new ApiResponse(true, 200, 'Görevler başarılı bir şekilde listelendi', todoResult, {})
    ).catch(
      (err) => new ApiResponse(false, 500, 'Görevler listelenirken bir hata oluştu.', {}, err)
    );
  }

  /**
   * @param {number} id
   * @return {Todo}
   */
  static SoftDelete(id) {
    const deleteTodoPromise = TodoModel.findByIdAndUpdate(
      id,
      {
        isDelete: true
      },
      {
        new: true
      }
    );

    return deleteTodoPromise.then(
      (deleteResult) => new ApiResponse(true, 200, 'Görev başarılı bir şekilde silindi.', deleteResult, {})
    ).catch(
      (err) => new ApiResponse(false, 500, 'Görev silinirken bir hata oluştu.', {}, err)
    );
  }
}

module.exports = TodoRepository;
