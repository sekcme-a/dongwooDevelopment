import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Link from 'next/link';
import Footer from "components/Layout/Footer/Footer";

export default function Custom404() {
  return (
    <>
      <Navbar />

      <PageBanner title="404 Error" homeText="Home" homeUrl="/" />

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src="/images/error.png" alt="동우개발" />
            <h3>Error 404 : Page Not Found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href="/">
              <a className="dev_mainbutton">Back to Homepage</a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
