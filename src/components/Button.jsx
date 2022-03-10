import classNames from "classnames";
import React from "react";

export default function Button({ onClick, className, outline, children }) {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(
          "button",
          className,
          outline,
          { "button--cart": className },
          { "button--outline": outline }
        )}
      >
        {children}
      </button>
    </>
  );
}
