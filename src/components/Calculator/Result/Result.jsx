import React from "react";
import styles from "./Result.module.css";

function Result({ handleReset, tipAmount, numberOfPeople, bill }) {
  return (
    <div
      className={`${styles.result_bg_color} mt-6 pt-9 pb-6 px-6 rounded-lg flex flex-col justify-between md:pt-12 md:px-9 md:mt-0 md:rounded-xl`}
    >
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className={`${styles.result__label} text-base`}>Tip Amount</h3>
            <p className={`${styles.result__sub_label} text-sm`}>/ person</p>
          </div>
          <h2 className={`${styles.result__amount} text-3xl md:text-4xl`}>
            $
            {numberOfPeople > 0 && tipAmount / numberOfPeople > 0
              ? (tipAmount / parseInt(numberOfPeople)).toFixed(2)
              : "0.00"}
          </h2>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <h3 className={`${styles.result__label} text-base`}>Total</h3>
            <p className={`${styles.result__sub_label} text-sm`}>/ person</p>
          </div>
          <h2 className={`${styles.result__amount} text-3xl md:text-4xl`}>
            $
            {numberOfPeople > 0 && tipAmount / numberOfPeople > 0
              ? (
                  (parseFloat(bill) + tipAmount) /
                  parseInt(numberOfPeople)
                ).toFixed(2)
              : "0.00"}
          </h2>
        </div>
      </div>

      <button
        className={`${styles.result__reset_btn} uppercase mt-6 w-full rounded-md py-2 text-xl`}
        onClick={handleReset}
      >
        reset
      </button>
    </div>
  );
}

export default Result;
