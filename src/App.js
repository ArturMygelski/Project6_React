import "./App.css";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import Logo from "./Components/Logo/Logo";
import Result from "./Components/Result/Result";
import Select from "./Components/Select/Select";
import { useState } from "react";

const availableCurrency = ["EUR", "USD", "CZK"];
const url = "https://api.nbp.pl/api/exchangerates/tables/A/";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState("EUR");
  const [resultValue, setResultValue] = useState(0);

  const showInputVal = (e) => {
    setInputValue(e.target.value);
  };
  const showSelectVal = (e) => {
    setSelectValue(e.target.value);
  };

  // function updateValue(e) {
  //   if (input.value < 0) {
  //     alert("Brak możliwości wpisana liczb ujemnych");
  //   } else {
  //     getValueData();
  //   }
  // }
  const getCurrencies = () => {
    fetch(url)
      .then((responce) => responce.json())
      .then((data) => {
        const currencies = data[0].rates.filter((element) =>
          availableCurrency.includes(element.code)
        );
        const mid = currencies.find(
          (element) => element.code === selectValue
        ).mid;
        setResultValue(Number.parseFloat(inputValue * mid).toFixed(2));
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      <Logo></Logo>
      <div className="container">
        <Input inputValue={showInputVal}></Input>
        <Select selectedValue={selectValue} onChange={showSelectVal}></Select>
        <Button calculate={getCurrencies}></Button>
        <span>to</span>
        <Result calculate={resultValue}></Result>
      </div>
    </>
  );
}

export default App;
