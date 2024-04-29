import React, { useState } from "react";
import styles from "./Calculator.module.css";
import BillInput from "./BillInput/BillInput";
import SelectTip from "./SelectTip/SelectTip";
import PeopleInput from "./PeopleInput/PeopleInput";
import Result from "./Result/Result";

function Calculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);

  const handleBillChange = (e) => {
    setBill(e.target.value);
    calTipAmount();
  };

  const handleSelectedTip = (e) => {
    setTip(e.target.value);
    calTipAmount();
  };

  const handleCustomTip = (e) => {
    setCustomTip(e.target.value);
    calTipAmount();
  };

  const handlePeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
    calTipAmount();
  };

  const handleReset = () => {
    setBill("");
    setTip("");
    setCustomTip("");
    setNumberOfPeople("");
  };

  const calTipAmount = () => {
    const tipAmount = customTip
      ? (parseFloat(bill) * parseFloat(customTip)) / 100
      : (parseFloat(bill) * parseFloat(tip)) / 100;

    setTipAmount(tipAmount);
  };

  return (
    <div
      className={`${styles.calculator_bg_color} rounded-t-[26px] p-6 md:grid md:grid-cols-2 md:gap-x-6 md:rounded-b-[26px] md:p-9 md:shadow-black`}
    >
      <div>
        <BillInput handleBillChange={handleBillChange} bill={bill} />
        <SelectTip
          tip={tip}
          handleSelectedTip={handleSelectedTip}
          customTip={customTip}
          handleCustomTip={handleCustomTip}
        />
        <PeopleInput
          handlePeopleChange={handlePeopleChange}
          numberOfPeople={numberOfPeople}
        />
      </div>
      <Result
        handleReset={handleReset}
        tipAmount={tipAmount}
        numberOfPeople={numberOfPeople}
        bill={bill}
      />

      <div className="attribution mt-12">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/TomLi0421">TomLi0421</a>.
      </div>
    </div>
  );
}

export default Calculator;
