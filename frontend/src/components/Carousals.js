import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";

const Carousals = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:5001/events")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div
        className="container-fluid carousalss"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <div className="col mx-2 my-2">
          <div
            className="d-flex my-2"
            style={{ justifyContent: "space-between" }}
          >
            <div className="fw-bold">Important Events</div>
            <div className="d-flex">
              <div className="px-1" style={{ color: "#d63384" }}>
                See All Events
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-box-arrow-up-right mt-1 p-fixed "
                style={{ color: "#d63384" }}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </div>
            {/* <div className=""></div> */}
          </div>
          <div
            className="d-flex w-100 flex-wrap "
            style={{ justifyContent: "space-between" }}
          >
            <button className="arrow " style={{ width: "20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>

            <div className="row">
              {data.map((image) => (
                <div key={image._id} className="w-25 px-2 py-2">
                  <EventCard data={image} />
                </div>
              ))}
            </div>

            <button className="arrow" style={{ width: "20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousals;
