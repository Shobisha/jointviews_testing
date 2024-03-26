import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact-Us</title>
      </Head>

      <div>
        <section id="inner-page-banner" className="bannerco">
          <div className="imgbanner  infocon">
            <div className="container  margintope">
              <div className="row">
                <div
                  className="col-md-4 text-center wow zoomIn animated"
                  style={{ visibility: "visible" }}
                >
                  <h1 className="hone">Contact Us</h1>
                </div>
                <div
                  className="col-md-8 text-center wow zoomIn animated"
                  style={{ visibility: "visible" }}
                >
                  <h2 className="htwo">
                    Enjoy Online Success with JointViews Content Marketing
                    Agency
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="breadcrumb" className="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumbul">
                <li className="breadcrumbulli">
                  <a
                    href="https://www.jointviews.com"
                    rel="nofollow"
                    className="alink"
                  >
                    Home
                  </a>
                </li>
                <li className="breadcrumbullicon">Contact Us</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="page-block-wrap">
          <div className="contwrap">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <h2 className="brdrnone .htwoget">
                    <strong className="stronggethwo">Get In</strong> Touch
                  </h2>
                  <img
                    className="contact-ogo"
                    src="/images/contact_logo.png"
                    alt="Contact Logo"
                  />
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <div className="textborderbtm">
                        <strong className="strongget">Address:</strong>
                        <div className="trxt">
                          Jointviews,Edsys Towers, Near ICICI Bank ATM,
                          Kamaleswaram, Trivandrum, Kerala, PIN – 695009
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="info-block">
                        <strong className="strongget">Phone:</strong>
                        <div className="trxt">+91 811 386 3000</div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="info-block">
                        <strong className="strongget">Email:</strong>
                        <div className="trxt">info@jointviews.com</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-7">
                  <div className="page-block-cont-info">
                    <div className="default-form">
                      <form>
                        <div className="form-group formgroupget">
                          <input
                            type="text"
                            className="form-control formcontrolget"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group formgroupget">
                          <input
                            type="email"
                            className="form-control formcontrolget"
                            placeholder="E-mail"
                          />
                        </div>
                        <div className="form-group formgroupget">
                          <input
                            type="text"
                            className="form-control formcontrolget"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="form-group formgroupget">
                          <textarea
                            className="form-control inputtextarea"
                            rows="6"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div
                          className="form-group formgroupget"
                          style={{ position: "relative" }}
                        >
                          <input
                            type="submit"
                            value="Send"
                            className="subbtn text-center subbtntxt"
                          />
                          <div
                            className="loaderget"
                            style={{ padding: "70px" }}
                          ></div>
                        </div>
                        <span id="form_error" className="checktxt">
                          Please Check The Name
                        </span>
                        {/* <span id="form_success" style={{ color: "#478e43", float: "left", width: "100%", margin: "5px 0", textAlign: "center", fontSize: "17px" }}></span> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="map-wrap">
          <div className="col-sm-12 service-cont wow zoomIn animated">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15785.355117087673!2d76.94701069999999!3d8.466399050000001!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1502262410146"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default contact;
