const Input = ({ InputValue }) => {
  return (
    <input
      type="number"
      id="input"
      min="0"
      placeholder="Wpisz kwote"
      onInput={InputValue}
    />
  );
};
export default Input;
