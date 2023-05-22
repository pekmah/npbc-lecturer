import React from "react";
import { Toast } from "react-bootstrap";

const Success = () => {
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      className="d-inline-block m-1"
      bg={"success"}
    >
      <Toast.Header>
        {/*<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />*/}
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className={variant === "Dark" && "text-white"}>
        Hello, world! This is a toast message.
      </Toast.Body>
    </Toast>
  );
};

const Error = () => {
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      className="d-inline-block m-1"
      bg={"success"}
    >
      <Toast.Header>
        {/*<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />*/}
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className={variant === "Dark" && "text-white"}>
        Hello, world! This is a toast message.
      </Toast.Body>
    </Toast>
  );
};

export default Toast;
