import React from "react";

export const Error = ({ children }) => {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-5"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>{children}</p>
    </div>
  );
};
