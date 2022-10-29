import { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = event => {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(userData);
  };
  return (
    <>
      <h1>Input Your Data</h1>
      <form onSubmit={handleOnSubmit}>
        <label>
          UserName:
          <input
            type="text"
            value={userName}
            name="username"
            onChange={e => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
