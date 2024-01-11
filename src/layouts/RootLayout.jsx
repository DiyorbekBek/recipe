import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeTools from "../components/ThemeTools";
function RootLayout() {
  return (
    <>
      <Navbar />
      <ThemeTools />
      <main className="max-container grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
