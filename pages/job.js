import React from "react";

const Job = () => {
  return (
    <>
      <section
        className="_jb-bnr-sx"
        data-overlay-dark="7"
        style={{
          backgroundImage:
            "url(https://www.jointviews.com/wp-content/themes/jointviews/images/job_bnr.jpg)",
        }}
      >
        {/* Content for your banner section */}
      </section>
      <section className="_jb-01-sx">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="_jb-01a-sx">
                <div className="row">
                  <div className="col-md-6">
                    <div className="_jb-01aa-sx">
                      <h3>
                        <img
                          src="https://www.jointviews.com/wp-content/themes/jointviews/images/write.svg"
                          alt=""
                        />
                        Write for us
                      </h3>
                      <p>
                        Are you an exceptional wordsmith who loves to write on
                        any of these topics?
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-plus-circle"></i>Education
                        </li>
                        <li>
                          <i className="fa fa-plus-circle"></i>Mobile Apps
                          (incl.Development)
                        </li>
                        <li>
                          <i className="fa fa-plus-circle"></i>Software Testing
                        </li>
                        <li>
                          <i className="fa fa-plus-circle"></i>SaaS
                        </li>
                        <li>
                          <i className="fa fa-plus-circle"></i>Software Products
                        </li>
                      </ul>
                      <p>
                        If yes,
                        <br />
                        We are looking at a long-term relationship with you.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="_jb-01ab-sx">
                      <div className="_jb-01ab-hd-sx">
                        <h4>
                          <i className="fa fa-plus-circle"></i> Post a Job
                        </h4>
                      </div>
                      <div className="_jb-01ab-frm-sx">
                        <div className="form-group frm-grp-sx">
                          <input
                            type="text"
                            className="form-control frm-cntrl"
                            placeholder="Name"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group frm-grp-sx">
                              <input
                                type="email"
                                className="form-control frm-cntrl"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group frm-grp-sx">
                              <input
                                type="text"
                                className="form-control frm-cntrl"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group frm-grp-sx">
                          <h4>Subject</h4>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group frm-grp-sx">
                              <input
                                type="checkbox"
                                name="checkbox[]"
                                id="checkbox1"
                              />
                              <label htmlFor="checkbox1">Education</label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group frm-grp-sx">
                              <input
                                type="checkbox"
                                name="checkbox[]"
                                id="checkbox2"
                              />
                              <label htmlFor="checkbox2">Education</label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group frm-grp-sx">
                              <input
                                type="checkbox"
                                name="checkbox[]"
                                id="checkbox3"
                              />
                              <label htmlFor="checkbox3">Education</label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-10 _show01-col">
                            <div className="_show01-sx">
                              <div className="form-group frm-grp-sx">
                                <input
                                  type="text"
                                  className="form-control frm-cntrl"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-1">
                            <div className="form-group frm-grp-sx">
                              <div className="_hide01-sx">
                                <p>+</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group frm-grp-sx">
                              <p>Upload CV</p>
                              <input type="file" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group frm-grp-sx">
                              <p>Sample Writing</p>
                              <input type="file" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group frm-grp-sx">
                          <button type="submit" className="btn btn-primry">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Job;
