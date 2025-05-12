import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <div className="layout" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Header />
    <Navbar />
    <div className="layout-body" style={{ flex: 1 }}>
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
    <Footer />
  </div>
);

export default MainLayout;