import React from "react";
import Notice from "./Notice";

const Notices = () => {
  return (
    <div className="container notices">
      <div className="row" style={{ flexFlow: "row wrap" }}>
        <div className="fs-6 fw-bold">Notices</div>
        <div className="col-sm-6 notice">
          <Notice />
        </div>
        <div className="col-sm-6">
          <Notice color="green" venue="Exam Dept." />
        </div>
        <div className="px-4">
          <hr />
        </div>

        <div className="col-sm-6">
          <Notice color="green" venue="Exam Dept." />
        </div>
        <div className="col-sm-6">
          <Notice color="red" venue="Student Activity" />
        </div>
        <div className="px-4">
          <hr />
        </div>
        <div
          className=" px-4 fw-bold text-center py-2"
          style={{ color: "#d63384", fontSize: "14px", opacity: 1 }}
        >
          See All Notices
        </div>
      </div>
    </div>
  );
};

export default Notices;
