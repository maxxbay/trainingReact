import s from './Todo.module.css';
import { RiTodoFill } from 'react-icons/ri';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={s.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={s.todoIcon} />
      <div className={s.todoText}>{todo}</div>
    </div>
  );
}
export default Todo;
