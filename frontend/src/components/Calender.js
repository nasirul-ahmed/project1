import React, { useState } from "react";
import { Calendar as Calndr } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="col calender-div p-3 fw-bold w-100 h-75" style={{}}>
      <div className="text">Calender</div>
      <div style={{display: "flex", textAlign: "center", justifyContent: 'center', alignItems: 'center'}}>
        <Calndr
          prev2Label={null}
          next2Label={null}
          className="calender"
          showDoubleView={false}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Calender;
