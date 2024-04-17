import "@/assets/styles/globals.css";

import React from "react";

export const metadata = {
  title: "Properties | Find Perfect Property",
  description: "Find good properties",
  keywords: "Rental,Properties,Find Properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
