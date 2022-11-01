import './Info.css';
import s from './Info.module.css';

function Info() {
  return (
    <div className={s.info}>
      <h1>Hello from the Info component</h1>
      <button className={s.myOtherButton}>Click me in info</button>
    </div>
  );
}
export default Info;
