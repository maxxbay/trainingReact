function Button({ onClick, text }) {
  return (
    <>
      <button id="1" onClick={onClick}>
        {text}
      </button>
    </>
  );
}
export default Button;
