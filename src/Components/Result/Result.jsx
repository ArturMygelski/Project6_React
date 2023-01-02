const Result = ({ calculate }) => {
  return (
    <>
      <input id="result" value={calculate}></input>
      <span id="resultCurrency">PLN</span>
    </>
  );
};
export default Result;
