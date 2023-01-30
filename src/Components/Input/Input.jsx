const Input = ({ inputValue, preventValue }) => {
  return (
    <input
      type="number"
      id="input"
      min="0"
      placeholder="Wpisz kwote"
      onInput={inputValue}
      onKeyDown={preventValue}
    />
  );
};
export default Input;
