import React from "react";
import styles from "./BillInput.module.css";

function BillInput({ handleBillChange, bill }) {
  return (
    <>
      <label htmlFor="bill" className={`${styles.bill_input__label} text-base`}>
        Bill
      </label>
      <div className="relative mt-2">
        <span
          className={`${styles.bill_input__input_box__dollar_sign} absolute left-0 pl-3 py-1.5`}
        >
          <i className="fa-solid fa-dollar-sign fa-sm"></i>
        </span>
        <input
          type="number"
          id="bill"
          value={bill}
          onChange={handleBillChange}
          className={`${styles.bill_input__input_box} rounded w-full py-1.5 pr-3 text-right hover:cursor-pointer`}
        />
      </div>
    </>
  );
}

export default BillInput;
