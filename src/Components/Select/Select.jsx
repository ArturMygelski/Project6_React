const Select = ({ onChange, selectedValue }) => {
  return (
    <div id="currencySelect">
      <select value={selectedValue} onChange={onChange}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CZK">CZK</option>
        <option value="CHF">CHF</option>
      </select>
    </div>
  );
};
export default Select;
