const Result = ({ calculate }) => {
  return (
    <>
      <p id="result" value={calculate}></p>
      <span id="resultCurrency">PLN</span>
    </>
  );
};
export default Result;
