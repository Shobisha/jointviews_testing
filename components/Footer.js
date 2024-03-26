import Head from "next/head";
import React from "react";
import { GrShare } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css"
          integrity="sha512-3sTMt/S2aRaMfmK4R2s6+9tDPxFhL78zTQpDpXnvw8v2b0+x8HtKmVg6I5Jne2fmzACyN1ZgFwcn3Z2sVeqsPQ=="
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-G4zxF3i5eoWO/ZODfF3v1eIv9CQOYVQXkX0s5JXwR0F4qXYR+R9H6k+goxwHbqMAbyjXebXq4VPhB1cznYcJLg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <section id="footer" className="backgroundfull  footer  ">
        <div className="container contnr-full-wdth-tab   ">
          <div className="row ">
            <div className="col-xs-12 col-sm-3 tab-view-sx mt-5">
              <div className="mt-5">
                <img src="/images/footer_logo.jpg" />
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-3 tab-view-sx mt-5"
              style={{ padding: 0 }}
            >
              <div className="col-xs-12  col-footer-2">
                <h4 className="padg-sx ">Our Services</h4>
                <ul id="footer-list-sec" className="p-zero-sx">
                  <li>
                    <a
                      href="digital-marketing-services/search-engine-optimization/"
                      rel="nofollow"
                    >
                      <i class="fa fa-angle-double-right  arrowstyle"></i>Search
                      Engine Optimization
                    </a>
                  </li>
                  <li>
                    <a
                      href="/digital-marketing-services/social-media-marketing/"
                      rel="nofollow"
                    >
                      <i class="fa fa-angle-double-right arrowstyle"></i>Social
                      Media Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/digital-marketing-services/content-marketing/"
                      rel="nofollow"
                    >
                      <i class="fa fa-angle-double-right arrowstyle"></i>Content
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/digital-marketing-services/app-store-optimization/"
                      rel="nofollow"
                    >
                      <i class="fa fa-angle-double-right arrowstyle"></i>App
                      Store Optimization
                    </a>
                  </li>
                  <li>
                    <a
                      href="/digital-marketing-services/infographics/"
                      rel="nofollow"
                    >
                      <i class="fa fa-angle-double-right arrowstyle"></i>
                      Infographics
                    </a>
                  </li>
                </ul>
                <a
                  href="https://www.jointviews.com/wp-content/themes/jointviews/images/digitalmarketingcompany.pdf"
                  download="jointviews"
                >
                  <img
                    src="/images/download.png"
                    alt="Download Logo"
                    style={{ marginBottom: 10, marginLeft: 35 }}
                  />
                </a>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-3 tab-view-sx mt-5"
              style={{ padding: 0 }}
            >
              <div className="col-xs-12 col-footer mrgnBotm">
                <h4 className="ps-2 padg-sxx">OUR PARTNERS</h4>
                <ul id="footer-list-sec" className="ps-2">
                  <li>
                    <i class="fa fa-home arrowstyle"></i>Jointviews,Edsys
                    Towers,
                  </li>

                  <li style={{ marginTop: 0, marginLeft: 26 }}>
                    Near ICICI Bank ATM,
                  </li>
                  <li style={{ marginTop: 0, marginLeft: 26 }}>
                    Kamaleswaram, Trivandrum,
                  </li>
                  <li style={{ marginTop: 0, marginLeft: 26 }}>
                    Kerala, PIN – 695009
                  </li>
                  <li
                    style={{ marginTop: 0, marginLeft: 26, color: "#03f6fc" }}
                  >
                    Phone No: +91 811 386 3000
                  </li>
                  <li
                    style={{ marginTop: 0, marginLeft: 26, color: "#03f6fc" }}
                  >
                    Email : info@jointviews.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-3 tab-view-sx mt-5">
              <div className="row">
                <div className="col-xs-12 col-footer">
                  <h4
                    style={{
                      marginLeft: "-9px",
                      marginBottom: "10px",
                      color: "WHITE",
                    }}
                  >
                    BLOG
                  </h4>
                  <div className="row">
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a
                        href="/blog/tools-for-online-reputation-monitoring/"
                        className="blog-link"
                      >
                        <div className="blog-img">
                          <img
                            src="/images/08-10-2018_Top-8-tools-For-Online-Reputation-monitoring-150x150.jpg"
                            className="img-respncv"
                          />
                          <div className="overlay">
                            <i className=" iconhover">
                              <GrShare />
                            </i>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a
                        href="/blog/roles-and-responsibilities-of-hr/"
                        className="blog-link"
                      >
                        <div className="blog-img">
                          <img
                            src="/images/27-09-2018_Machine-Learning-in-Search-How-does-it-work-150x150.jpg"
                            className="img-respncv"
                          />
                          <div className="overlay">
                            <i className=" iconhover">
                              <GrShare />
                            </i>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a
                        href="/blog/best-employee-attendance-tracking-apps/"
                        className="blog-link"
                      >
                        <div className="blog-img">
                          <img
                            src="/images/04-09-2018_8-Popular-Digital-Skills-in-Demand-2018-150x150.jpg"
                            className="img-respncv"
                          />
                          <div className="overlay">
                            <i className=" iconhover">
                              <GrShare />
                            </i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a
                        href="/blog/top-router-for-gaming/"
                        className="blog-link"
                      >
                        <div className="blog-img">
                          <img
                            src="/images/Why-Website-Design-Is-Important-For-SEO-1-150x150.jpg"
                            className="img-respncv"
                          />
                          <div className="overlay">
                            <i className=" iconhover">
                              <GrShare />
                            </i>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a
                        href="/blog/best-employee-attendance-tracking-apps/"
                        className="blog-link"
                      >
                        <div className="blog-img">
                          <img
                            src="/images/12-Website-Design-Strategies-To-Improve-Your-Business-150x150.jpg"
                            className="img-respncv"
                          />
                          <div className="overlay">
                            <i className=" iconhover">
                              <GrShare />
                            </i>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div
                      className="col-4"
                      style={{ paddingLeft: "7px", paddingRight: "7px" }}
                    >
                      <a
                        href="/blog/top-router-for-gaming/"
                        className="blog-link"
                      >
                        <div className="blog-img">
                          <img
                            src="/images/Blog-164-150x150.jpg"
                            className="img-respncv"
                          />
                          <div className="overlay">
                            <i className=" iconhover">
                              <GrShare />
                            </i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-footer-2">
                  <h4
                    style={{
                      marginLeft: "8px",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    Subscribe
                  </h4>
                  <ul className="ps-2">
                    <li>
                      <form method="post" id="sub_mail">
                        <span
                          id="form_error_sub"
                          style={{ color: "#ff940f", width: "100%" }}
                        ></span>
                        <span
                          id="form_success_sub"
                          style={{ color: "#b0cb31", width: "100%" }}
                        ></span>
                        <div
                          className="form-group"
                          style={{
                            display: "flex",
                            position: "relative",
                            width: "100%",
                          }}
                        >
                          <input
                            type="email"
                            placeholder="Mail"
                            className="form-control"
                            name="your_email"
                            required
                          />
                          <input type="hidden" id="current_page" value="Home" />
                          <input
                            type="submit"
                            id="subscribe_submit"
                            value="Send"
                          />
                          <div className="sub_loader"></div>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className=" footer-bottom">
          <div className="container footer-bottomsss ">
            <div className="col-xs-12  footer-icons" style={{ padding: "0" }}>
              <div className=" round-fb">
                <a href="https://www.facebook.com/JointviewsOnline">
                  <span className=" ">
                    <FaFacebookF className="iconwhite" />
                  </span>
                </a>
              </div>
              <div className=" round-twtr">
                <a href="https://twitter.com/jointviews">
                  <FaTwitter className="iconwhite" />
                </a>
              </div>
              <div className=" round-lnkdin">
                <a href="https://www.linkedin.com/company/jointviews">
                  <FaLinkedinIn className="iconwhite" />
                </a>
              </div>
              <div className=" round-ytub">
                <a href="https://www.youtube.com/channel/UCRTEEcjpgpuGqn5gHb7lsww">
                  <TfiYoutube className="iconwhite" />
                </a>
              </div>
              <div className=" round-gogl">
                <a href="https://plus.google.com/101427006384699171862">
                  <FaGooglePlusG className="iconwhite" />
                </a>
              </div>
            </div>
            <div className="footer-icons">
              <p>© 2020 Jointviews. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
