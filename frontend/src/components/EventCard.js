import React from "react";
import moment from "moment";

const EventCard = ({ data }) => {
  const {
    body = "Nostrud sunt nulla amet ad aute consectetur.",
    title,
    date,
    image,
  } = data;
  return (
    <div className="card col-sm-12">
      <div>
        <img
          style={{ opacity: 1.2 }}
          className="card-img"
          src={image}
          height={160}
          width={160}
          alt="imahbha"
        />
        <div className="card-img-overlay">
          <div
            className="row d-flex"
            style={{ position: "absolute", zIndex: 2 }}
          >
            <div
              className="bg-white text-center"
              style={{
                marginLeft: "10px",
                height: 50,
                width: 50,
                alignItems: "end",
                justifyContent: "start",
                borderRadius: "15px",
              }}
            >
              <span>{moment(date).format("DD-MMM-YYYY").split("-")[0]}</span>

              <div style={{ fontSize: 12 }}>
                {moment(date).format("DD-MMM-YYYY").split("-")[1]}
              </div>
            </div>

            <div
              className="card-body "
              style={{ float: "bottom-left", color: "white", fontSize: "12px" }}
            >
              <div
                className="card-title "
                style={{
                  float: "bottom-left",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {title}
              </div>
              {body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
