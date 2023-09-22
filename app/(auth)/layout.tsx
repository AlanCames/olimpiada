import React from "react";

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="items-center flex justify-center h-screen">{children}</div>
  );
};

export default layout;
