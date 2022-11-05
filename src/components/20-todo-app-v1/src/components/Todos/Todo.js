import s from './Todo.module.css';
import { RiDeleteBinLine, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`${s.todo} ${todo.isCompleted ? s.completedTodo : ''}`}>
      <RiTodoFill className={s.todoIcon} />
      <div className={s.todoText}>{todo.text}</div>
      <RiDeleteBinLine
        className={s.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className={s.checkIcon} onClick={() => toggleTodo(todo.id)} />
    </div>
  );
}
export default Todo;
