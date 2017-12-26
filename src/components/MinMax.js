import React from 'react';

const MinMax = ({ setMinMaxInput, setMinMaxClick }) => {
  return (
    <div className="">
      <input
        className="minimum--input"
        type="number"
        placeholder="min"
        name="userMin"
        onChange={setMinMaxInput}
      />

      <input
        className="maximum--input"
        type="number"
        placeholder="max"
        name="userMax"
        onChange={setMinMaxInput}
      />

      <button
        className="min-max--button"
        onClick={setMinMaxClick}
      >
        Submit
      </button>
    </div>
  )
};

export default MinMax;
