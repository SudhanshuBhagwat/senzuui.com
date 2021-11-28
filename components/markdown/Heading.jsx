import React from "react";

const H1 = ({ children }) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};

const H2 = ({ children }) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

const H3 = ({ children }) => {
  return <h3 className="text-xl">{children}</h3>;
};

const H4 = ({ children }) => {
  return <h4 className="text-lg">{children}</h4>;
};

const H5 = ({ children }) => {
  return <h5 className="text-base">{children}</h5>;
};

const H6 = ({ children }) => {
  return <h6 className="text-sm">{children}</h6>;
};

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

export { H1, H2, H3, H4, H5, H6 };
