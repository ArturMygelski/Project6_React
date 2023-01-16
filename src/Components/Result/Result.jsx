const Result = ({ calculate }) => {
  return (
    <>
      <p id="result" readOnly>
        {calculate}{" "}
      </p>
      <span id="resultCurrency">PLN</span>
    </>
  );
};
export default Result;
