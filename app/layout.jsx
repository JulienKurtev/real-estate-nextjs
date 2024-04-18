import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import React from "react";

export const metadata = {
  title: "Properties | Find Perfect Property",
  description: "Find good properties",
  keywords: "Rental,Properties,Find Properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
