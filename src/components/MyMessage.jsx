import React from "react";
const MyMessage = (message) => {
  if (message?.message?.attachments?.length > 0) {
    console.log("HERE!");
    return (
      <img
        src={message.message.attachments[0].file}
        alt="Did not load!"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.message.text}
    </div>
  );
};

export default MyMessage;
