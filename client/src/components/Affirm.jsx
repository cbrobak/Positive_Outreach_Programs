import React, { useState, useEffect } from "react";
import api from '../api';

export default function Affirm({ setHeaderShow, setFooterShow, onSelect }) {
  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(async () => {
    const getAffirmation = await api.getAffirmations()
    let data = getAffirmation.data;
    setSelectOptions(data)
  }, []);

  return (
    <>
    <h3 className="text-danger container mt-5">Please select an affirmation category to begin. The Cue-ball will then appear. To start the selection process, hover over the Cue-ball. Then move your mouse away to see your randomly generated affirmation. To see a different affirmation, simply repeat the process.<br />Enjoy!</h3>
      <div className="mt-5">
        <label className="text-light">Categories:&nbsp;
        <select onChange={(e) => {
          setHeaderShow(false);
          setFooterShow(false);
          onSelect(e);
        }}>
            <option value="blank">Choose:</option>
            {selectOptions.length > 0 ? selectOptions.map((el, idx) => {
              return <option key={idx} value={el.category}>{el.category.slice(4)}</option>
            }) : null}
          </select>
        </label>
      </div>
    </>
  )
};