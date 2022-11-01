import Todo from './Todo';
import s from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={s.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo index={index} key={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
