function Login() {
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
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
