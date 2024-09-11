import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <body suppressHydrationWarning={true}>{children}</body>;
};

export default Wrapper;
