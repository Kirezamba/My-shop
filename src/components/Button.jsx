import classNames from "classnames";
import React from "react";

export default function Button({ className, children }) {
  return (
    <>
      <button className={classNames("button", className, { "button--cart": className })}>
        {children}
      </button>
    </>
  );
}
