import React from "react";

const Notice = ({ venue = "Principal Office", color = "blue" }) => {
  return (
    <div>
      <div className="container-fluid " style={{}}>
        <div className="col px-1 py-1" style={{ flexFlow: "wrap" }}>
          <div className="text fw-bold py-2">
            Eiusmod eiusmod ex nostrud pariatur labore{" "}
          </div>
          <div className="d-flex flex-wrap py-1" style={{ flexFlow: "row nowrap" }}>
            <div
              className="fw-bold text-pink"
              style={{ color: "#d63384", marginRight: "10px" }}
            >
              13 February 2021
            </div>
            <div
              className={` badge bg-primary} text-wrap px-2 py-2 `}
              style={{ background: color }}
            >
              {venue}
            </div>
          </div>
          <div className="py-2" style={{ fontSize: "14px" }}>
            Voluptate officia ipsum incididunt ad aliqua quis cillum dolor id
            pariatur ea ea. Anim voluptate ex do officia.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
