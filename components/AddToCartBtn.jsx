import React from "react";

const AddToCartBtn = ({ btnStyles, text, icon }) => {
  return (
    <button className={`${btnStyles}`}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
