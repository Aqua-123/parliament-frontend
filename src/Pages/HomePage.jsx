import React from "react";
import Login from "../Components/Login";

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
      <section className="banner-homepage-sec">
        <Login />
        </section>
    </>
  );
}

export default HomePage;
