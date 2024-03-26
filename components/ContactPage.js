import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="brdrtop" id="page-cont-wrap">
        <div className="cont-wrap">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 bg-danger">
                <p>Wordpress content here</p>
              </div>
              <div className="col-sm-4">
                <div className="page-block-cont-info">
                  <h2>Contact us for a free quote</h2>
                  <div className="default-form">
                    <form method="post" id="form_subt">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Inputname"
                          placeholder="Name"
                          name="your_name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="E-mail"
                          name="your_email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile"
                          name="your_mobile"
                          minLength="7"
                          maxLength="15"
                          pattern="\d*"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Subject"
                          name="your_sub"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="6"
                          placeholder="Message"
                          name="your_message"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Send" className="btn" />
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  id="sticky-anchor"
                  style={{ float: "left", width: "100%" }}
                ></div>

                <div id="joint-form-fixed">
                  <Link href="/contact-us/">
                    <img
                      src="/images/Ad-banner.jpg"
                      alt="image"
                      className="stickdiv"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
