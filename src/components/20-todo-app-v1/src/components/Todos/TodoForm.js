import { useState } from 'react';
import s from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={s.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={e => setText(e.target.value)}
        ></input>
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;
