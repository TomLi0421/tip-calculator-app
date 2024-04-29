import React from "react";
import styles from "./SelectTip.module.css";

function SelectTip({ tip, handleSelectedTip, customTip, handleCustomTip }) {
  return (
    <div className="mt-6">
      <label htmlFor="tip" className={`${styles.tip__label} text-base`}>
        Select Tip %
      </label>

      <div className="grid grid-cols-2 gap-3 mt-1.5 md:grid-cols-3">
        <button
          className={`${styles.tip__btn} rounded py-1.5 ${
            tip === "5" && styles.tip__btn_active
          }`}
          value={5}
          onClick={handleSelectedTip}
        >
          5%
        </button>
        <button
          className={`${styles.tip__btn} rounded py-1.5 ${
            tip === "10" && styles.tip__btn_active
          }`}
          value={10}
          onClick={handleSelectedTip}
        >
          10%
        </button>
        <button
          className={`${styles.tip__btn} rounded py-1.5 ${
            tip === "15" && styles.tip__btn_active
          }`}
          value={15}
          onClick={handleSelectedTip}
        >
          15%
        </button>
        <button
          className={`${styles.tip__btn} rounded py-1.5 ${
            tip === "25" && styles.tip__btn_active
          }`}
          value={25}
          onClick={handleSelectedTip}
        >
          25%
        </button>
        <button
          className={`${styles.tip__btn} rounded py-1.5 ${
            tip === "50" && styles.tip__btn_active
          }`}
          value={50}
          onClick={handleSelectedTip}
        >
          50%
        </button>
        <input
          type="number"
          className={`${styles.tip__custom__input} outline-none rounded py-1.5 px-3 text-right hover:cursor-pointer`}
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomTip}
        />
      </div>
    </div>
  );
}

export default SelectTip;
