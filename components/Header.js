import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

export default function Header() {
  const router = useRouter();
  var LiveUrl = router.asPath;
  console.log("router->", LiveUrl);

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;

      if (scrollHeight > 28) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="header-top-wrap  ">
        <div className="container ">
          <div className="   fullrow  ">
            <div className="col-sm-10 col-xs-12  ">
              <div className="top-number  ">
                <div className="">
                  <div className=" d-flex   ">
                    <div className="  spacc col-md-3 ">
                      <span className="align">
                        <FaPhone className="iconcolor" />
                        +91 811 386 3000
                      </span>
                    </div>
                    <div className="spacc col-md-3">
                      <span className="align">
                        <FaPhone className="iconcolor" />
                        +91 811 386 3000
                      </span>
                    </div>
                    <div className=" spaccEamil col-md-6">
                      <span className="align">
                        <MdEmail className="iconcolor" />
                        Email : info@jointviews.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className=" ">
                <div className=" d-flex ">
                  <div className="spaccsocial  ">
                    <a href="https://www.facebook.com/JointviewsOnline">
                      <span className="aligngrey ">
                        <FaFacebookF className="iconcolorgrey " />
                      </span>
                    </a>
                  </div>

                  <div className=" spaccsocial  ">
                    <a href="https://twitter.com/jointviews">
                      <span className="aligngrey">
                        <FaTwitter className="iconcolorgrey " />
                      </span>
                    </a>
                  </div>
                  <div className=" spaccsocial  ">
                    <a href="https://www.linkedin.com/company/jointviews">
                      <span className="aligngrey">
                        <FaLinkedinIn className="iconcolorgrey " />
                      </span>
                    </a>
                  </div>
                  <div className="spaccsocialrightleft ">
                    <a href="https://www.youtube.com/channel/UCRTEEcjpgpuGqn5gHb7lsww">
                      <span className="aligngrey">
                        <TfiYoutube className="iconcolorgrey " />
                      </span>
                    </a>
                  </div>
                  <div className=" spaccsocialright ">
                    <a href="https://plus.google.com/101427006384699171862">
                      <span className="aligngrey">
                        <FaGooglePlusG className="iconcolorgrey " />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="head-footer-bg sticky-header navbar navbar-expand-lg"
        style={{
          marginTop: isHeaderFixed ? "0" : "", // Conditionally set marginTop to 0 if isHeaderFixed is true
        }}
        id="customnavbar"
      >
        <div className="container   ">
          <Link href="/" className="navbar-brand  ">
            <img src="/images/logo.gif" width="132" height="55" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"> */}
            <i className="fa fa-bars barstyle"></i>
            {/* </span> */}
          </button>
          <div
            className="collapse    navbar-collapse"
            id="navbarSupportedContent"
          >
            <div></div>
            <ul className="navbar-nav ms-auto centrecontent">
              <li className="nav-item  dropdown">
                <Link
                  className="nav-link dropdown-toggl  "
                  href="/about-us/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                  <IoIosArrowDown className="icondownarrorhead" />
                </Link>

                <ul className="dropdown-menu career-dropdown ">
                  <li>
                    <Link className="dropdown-item" href="/careers/">
                      Career
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggl"
                  href="/digital-marketing-agency-services/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Digital Marketing Services
                  <IoIosArrowDown className="icondownarrorhead" />
                </Link>
                <ul className="dropdown-menu career-dropdown whitecolor">
                  <li>
                    <Link
                      className="dropdown-item "
                      href="/digital-marketing-agency-services/search-engine-optimization/"
                    >
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/digital-marketing-agency-services/social-media-marketing/"
                    >
                      Social Media Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item "
                      href="/digital-marketing-agency-services/email-marketing/"
                    >
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/digital-marketing-agency-services/search-engine-marketing/"
                    >
                      Search Engine Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item "
                      href="/digital-marketing-agency-services/content-marketing/"
                    >
                      Content Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      href="/digital-marketing-agency-services/app-store-optimization/"
                    >
                      App Store Optimization
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item " href="/inbound-marketing/">
                      Inbound Marketing
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link  dropdown-toggl"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Creative Services
                  <IoIosArrowDown className="icondownarrorhead" />
                </Link>
                <ul className="dropdown-menu career-dropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/digital-marketing-agency-services/web-design/"
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/digital-marketing-agency-services/infographics/"
                    >
                      Infographics Design & Promotion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/animated-videos/">
                      Animated Videos
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggl"
                  href="/portfolio/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                  <IoIosArrowDown className="icondownarrorhead" />
                </Link>
                <ul className="dropdown-menu career-dropdown">
                  <li>
                    <Link className="dropdown-item " href="/portfolio/#tab1">
                      Slides
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " href="/portfolio/#tab2">
                      Videos
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item " href="/portfolio/#tab3">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " href="/portfolio/#tab4">
                      Thought Leadership
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item " href="/portfolio/#tab5">
                      Infographics
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item me-5 ">
                <Link className="nav-link " href="/blog/">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`with100 ${isHeaderFixed ? "fixedButton" : ""}`}
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
