import React from "react";
import styles from "./PeopleInput.module.css";

function PeopleInput({ numberOfPeople, handlePeopleChange }) {
  return (
    <div className="mt-6">
      <div className="md:flex md:justify-between">
        <label
          htmlFor="people"
          className={`${styles.people_input__label} text-base`}
        >
          Number of People
        </label>
        {numberOfPeople === "0" && (
          <p className="text-base text-red-600">Can't be zero</p>
        )}
      </div>
      <div className="relative mt-2">
        <span
          className={`${styles.people_input__input_box__dollar_sign} absolute left-0 pl-3 py-1.5`}
        >
          <i className="fa-solid fa-user fa-sm"></i>
        </span>
        <input
          type="number"
          id="people"
          value={numberOfPeople}
          onChange={handlePeopleChange}
          className={`${
            styles.people_input__input_box
          } rounded w-full py-1.5 pr-3 text-right hover:cursor-pointer ${
            numberOfPeople === "0" && "focus:outline-red-600"
          }`}
        />
      </div>
    </div>
  );
}

export default PeopleInput;
