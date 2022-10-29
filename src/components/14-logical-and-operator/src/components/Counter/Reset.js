function Reset({ setCount }) {
  const buttonStyle = { backgroundColor: 'lightgreen' };
  const resetCount = () => setCount(0);

  return (
    <div>
      <button style={buttonStyle} onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
