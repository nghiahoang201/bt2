import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const home2 = window.location.href;
  return (
    <div className="w-full flex flex-col items-center">
      {home2 === "http://localhost:3000/home2" ? (
        <Header home2={true} />
      ) : (
        <Header />
      )}
      {children}
      <div className="w-full mt-36">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
