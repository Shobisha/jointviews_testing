import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Jointview.com</title>
      </Head>

      <section className="banner-in  margintop">
        <div className="container">
          <img src="/images/banner.png" alt="Banner" className="imgsize" />
          <div className="bannerimginfo-in"></div>
        </div>
      </section>
      <section id="general-services" className="text-center">
        <div className="contwrap-in">
          <div className="container">
            <div className="row">
              <div
                className="heading-in wow zoomIn animated animated animated"
                style={{ visibility: "visible" }}
              >
                <h2 className="htwo-in">General Services</h2>
              </div>
              <div
                className="col-md-3 borderrt-in borderbtm-in"
                style={{ visibility: "visible" }}
              >
                <div className="boxwrap-in">
                  <a
                    href="https://www.jointviews.com/digital-marketing-services/search-engine-optimization/"
                    className="alink-in"
                  >
                    <img src="/images/icon1.png" alt="" className="imgbox-in" />
                  </a>
                  <h3 className="hthree-in">Search Engine</h3>
                  <h4 className="hfour-in">Optimization</h4>
                </div>
              </div>
              <div
                className="col-md-3 borderrt-in borderbtm-in"
                style={{ visibility: "visible" }}
              >
                <div className="boxwrap-in">
                  <a
                    className="alink-in"
                    href="https://www.jointviews.com/digital-marketing-services/social-media-marketing/"
                  >
                    <img className="imgbox-in" src="/images/icon2.png" alt="" />
                  </a>
                  <h3 className="hthree-in">Social Media</h3>
                  <h4 className="hfour-in">Marketing</h4>
                </div>
              </div>
              <div
                className="col-md-3 borderrt-in borderbtm-in"
                style={{ visibility: "visible" }}
              >
                <div className="boxwrap-in">
                  <a
                    className="alink-in"
                    href="https://www.jointviews.com/digital-marketing-services/email-marketing"
                  >
                    <img className="imgbox-in" src="/images/icon3.png" alt="" />
                  </a>
                  <h3 className="hthree-in">Email</h3>
                  <h4 className="hfour-in">Marketing</h4>
                </div>
              </div>
              <div
                className="col-md-3 borderbtm-in"
                style={{ visibility: "visible" }}
              >
                <div className="boxwrap-in">
                  <a
                    className="alink-in"
                    href="https://www.jointviews.com/digital-marketing-services/search-engine-marketing"
                  >
                    <img className="imgbox-in" src="/images/icon4.png" alt="" />
                  </a>
                  <h3 className="hthree-in">Search Engine</h3>
                  <h4 className="hfour-in">Marketing</h4>
                </div>
              </div>
              <div
                className="col-md-3 borderrt-in "
                style={{ visibility: "visible" }}
              >
                <div className="boxwrap-in">
                  <a
                    className="alink-in"
                    href="https://www.jointviews.com/digital-marketing-services/infographics/"
                  >
                    <img className="imgbox-in" src="/images/icon5.png" alt="" />
                  </a>
                  <h3 className="hthree-in">Infographics</h3>
                  <h4 className="hfour-in">Design</h4>
                </div>
              </div>
              <div
                className="col-md-3 borderrt-in "
                style={{ visibility: "visible" }}
              >
                <div className="boxwrap-in">
                  <a
                    className="alink-in"
                    href="https://www.jointviews.com/digital-marketing-services/app-store-optimization"
                  >
                    <img className="imgbox-in" src="/images/icon6.png" alt="" />
                  </a>
                  <h3 className="hthree-in">App Store</h3>
                  <h4 className="hfour-in">Optimization</h4>
                </div>
              </div>
              <div
                className="col-md-3 borderrt-in "
                style={{ visibility: "visible" }}
              >
                <div className="boxwrap-in">
                  <a
                    className="alink-in"
                    href="https://www.jointviews.com/digital-marketing-services/inbound-marketing"
                  >
                    <img className="imgbox-in" src="/images/icon7.png" alt="" />
                  </a>
                  <h3 className="hthree-in">Inbound</h3>
                  <h4 className="hfour-in">Marketing</h4>
                </div>
              </div>
              <div className="col-md-3 " style={{ visibility: "visible" }}>
                <div className="boxwrap-in">
                  <a
                    className="alink-in"
                    href="https://www.jointviews.com/digital-marketing-services/"
                  >
                    <img className="imgbox-in" src="/images/icon8.png" alt="" />
                  </a>
                  <h3 className="hthree-in">Outbound</h3>
                  <h4 className="hfour-in">Marketing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="special-services"
        className="specialservices-in parallaxsection-in"
      >
        <div className="contwrap-in">
          <div className="container">
            <div className="row">
              <div
                className="col-xs-12 col-sm-5"
                style={{ visibility: "visible" }}
              >
                <div className="heading-in" style={{ visibility: "visible" }}>
                  <h2 className="htwospe-in">Special Services</h2>
                </div>
                <div className="servicecol-in">
                  <ul className="servicecolul-in">
                    <li className="servicecolulli-in">
                      <div className="servicecolimg-in">
                        <img
                          src="/images/special_services_icon1.png"
                          alt=""
                          className="serviceimg-in"
                        />
                      </div>
                      <div className="servicecolcont-in">
                        <h2 className="servicecohtwo-in">Corporate</h2>
                        <h3 className="servicecohthree-in">Presentations</h3>
                      </div>
                    </li>
                    <li className="servicecolulli-in">
                      <div className="servicecolimg-in">
                        <img
                          src="/images/special_services_icon2.png"
                          alt=""
                          className="serviceimg-in"
                        />
                      </div>
                      <div className="servicecolcont-in">
                        <h2 className="servicecohtwo-in">Animated</h2>
                        <h3 className="servicecohthree-in">Videos</h3>
                      </div>
                    </li>
                    <li className="servicecolulli-in">
                      <div className="servicecolimg-in">
                        <a href="https://www.jointviews.com/digital-marketing-services/infographics/">
                          <img
                            src="/images/special_services_icon3.png"
                            alt=""
                            className="serviceimg-in"
                          />
                        </a>
                      </div>
                      <div className="servicecolcont-in">
                        <h2 className="servicecohtwo-in">Infographics</h2>
                      </div>
                    </li>
                    <li className="servicecolulli-in">
                      <div className="servicecolimg-in">
                        <img
                          src="/images/special_services_icon4.png"
                          alt=""
                          className="serviceimg-in"
                        />
                      </div>
                      <div className="servicecolcont-in">
                        <h2 className="servicecohtwo-in">Brochures &amp; </h2>
                        <h3 className="servicecohthree-in">posters</h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-7 wow zoomIn animated animated animated"
                style={{ visibility: "visible" }}
              >
                <div className="videowrap-in">
                  <iframe
                    src="https://www.youtube.com/embed/eem5Ip79hPo"
                    width="100%"
                    height="313"
                    frameBorder="0"
                    allowFullScreen="allowFullScreen"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="request-wrap" className="requestwrap-in">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center">
              <h2 className="htwowrap-in" style={{ visibility: "visible" }}>
                JointViews Content Marketing Agency?
              </h2>
            </div>
            <div className="col-md-4 text-center">
              <div className="requestbtn-in" style={{ visibility: "visible" }}>
                <h3 className="hthreewrap-in">
                  <i className="fa fa-paper-plane requestwrapicon-in"></i>
                  <a
                    href="https://www.jointviews.com/contact-us"
                    className="alinkwrap-in"
                  >
                    REQUEST A QUOTE
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-blog" className="ourblog-in">
        <div className="contwrap-in">
          <div className="container">
            <div className="row">
              <div className="heading-in" style={{ visibility: "visible" }}>
                <h2 className="htwo-in">Our Blog</h2>
              </div>
              <div className="blogwrap-in">
                <div className="row">
                  <div className="col-md-3 borderrtblog-in">
                    <div
                      className="boxwrapblog-in"
                      style={{ visibility: "visible" }}
                    >
                      <div className="hoverimgwrapblog">
                        <img
                          src="/images/08-10-2018_Top-8-tools-For-Online-Reputation-monitoring-150x150.jpg"
                          className="imgblog wp-post-image "
                          alt="Online Reputation Monitoring"
                          decoding="async"
                          fetchpriority="high"
                          srcset="https://www.jointviews.com/wp-content/uploads/2018/10/08-10-2018_Top-8-tools-For-Online-Reputation-monitoring.jpg 750w, https://www.jointviews.com/wp-content/uploads/2018/10/08-10-2018_Top-8-tools-For-Online-Reputation-monitoring-300x124.jpg 300w"
                          sizes="(max-width: 750px) 100vw, 750px"
                        />
                        <div className="overlayblog">
                          <a
                            className="infoblog"
                            href="/blog/tools-for-online-reputation-monitoring/"
                          >
                            Click Here
                          </a>
                        </div>
                      </div>
                      <div className="dateblog">
                        <i className="fa fa-calendar datablogicon"></i>
                        <p className="dateblogpara">26 Oct 2018</p>
                      </div>
                      <h3 className="hthreeblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="hthree-alink"
                        >
                          Top 8 Tools for Online Reputation Monitoring
                        </a>
                      </h3>
                      <p className="blogwrappara">
                        irrespective of the niche you{" "}
                      </p>
                      <div className="seemoreblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="seemore-alink "
                        >
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 borderrtblog-in">
                    <div
                      className="boxwrapblog-in"
                      style={{ visibility: "visible" }}
                    >
                      <div className="hoverimgwrapblog">
                        <img
                          src="/images/15-10-2018_How-to-create-a-Successful-website-10-factors-that-matter.jpg"
                          className="imgblog wp-post-image"
                          alt="How To Create a Successful Website"
                          decoding="async"
                          srcset="https://www.jointviews.com/wp-content/uploads/2018/10/15-10-2018_How-to-create-a-Successful-website-10-factors-that-matter.jpg 750w, https://www.jointviews.com/wp-content/uploads/2018/10/15-10-2018_How-to-create-a-Successful-website-10-factors-that-matter-300x124.jpg 300w"
                          sizes="(max-width: 750px) 100vw, 750px"
                        />
                        <div className="overlayblog">
                          <a
                            className="infoblog"
                            href="/blog/tools-for-online-reputation-monitoring/"
                          >
                            Click Here
                          </a>
                        </div>
                      </div>
                      <div className="dateblog">
                        <i className="fa fa-calendar datablogicon"></i>
                        <p className="dateblogpara">15 Oct 2018</p>
                      </div>
                      <h3 className="hthreeblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="hthree-alink"
                        >
                          How To Create a Successful Website – 10 Factors That
                          Matter
                        </a>
                      </h3>
                      <p className="blogwrappara">
                        Creating a website has become{" "}
                      </p>
                      <div className="seemoreblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="seemore-alink "
                        >
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 borderrtblog-in">
                    <div
                      className="boxwrapblog-in"
                      style={{ visibility: "visible" }}
                    >
                      <div className="hoverimgwrapblog">
                        <img
                          src="/images/27-09-2018_Machine-Learning-in-Search-How-does-it-work.jpg"
                          className="imgblog wp-post-image"
                          alt="machine learning in search"
                          decoding="async"
                          srcset="https://www.jointviews.com/wp-content/uploads/2018/09/27-09-2018_Machine-Learning-in-Search-How-does-it-work.jpg 750w, https://www.jointviews.com/wp-content/uploads/2018/09/27-09-2018_Machine-Learning-in-Search-How-does-it-work-300x124.jpg 300w"
                          sizes="(max-width: 750px) 100vw, 750px"
                        />
                        <div className="overlayblog">
                          <a
                            className="infoblog"
                            href="/blog/tools-for-online-reputation-monitoring/"
                          >
                            Click Here
                          </a>
                        </div>
                      </div>
                      <div className="dateblog">
                        <i className="fa fa-calendar datablogicon"></i>
                        <p className="dateblogpara">27 Sep 2018</p>
                      </div>
                      <h3 className="hthreeblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="hthree-alink"
                        >
                          Machine Learning in Search: How Does It Work?
                        </a>
                      </h3>
                      <p className="blogwrappara">It is very important that</p>
                      <div className="seemoreblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="seemore-alink "
                        >
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 borderrtblog-in">
                    <div
                      className="boxwrapblog-in"
                      style={{ visibility: "visible" }}
                    >
                      <div className="hoverimgwrapblog">
                        <img
                          src="/images/04-09-2018_8-Popular-Digital-Skills-in-Demand-2018.jpg"
                          className="imgblog wp-post-image"
                          alt="digital skills"
                          decoding="async"
                          srcset="https://www.jointviews.com/wp-content/uploads/2018/09/04-09-2018_8-Popular-Digital-Skills-in-Demand-2018.jpg 750w, https://www.jointviews.com/wp-content/uploads/2018/09/04-09-2018_8-Popular-Digital-Skills-in-Demand-2018-300x124.jpg 300w"
                          sizes="(max-width: 750px) 100vw, 750px"
                        />

                        <div className="overlayblog">
                          <a
                            className="infoblog"
                            href="/blog/tools-for-online-reputation-monitoring/"
                          >
                            Click Here
                          </a>
                        </div>
                      </div>
                      <div className="dateblog">
                        <i className="fa fa-calendar datablogicon"></i>
                        <p className="dateblogpara">4 Sep 2018</p>
                      </div>
                      <h3 className="hthreeblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="hthree-alink"
                        >
                          8 Popular Digital Skills In Demand For 2018
                        </a>
                      </h3>
                      <p className="blogwrappara">The rapid pace with which</p>
                      <div className="seemoreblog">
                        <a
                          href="/blog/tools-for-online-reputation-monitoring/"
                          className="seemore-alink "
                        >
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Repeat for other blog posts */}
                </div>
              </div>
              <div className="blogviewbtn">
                <a href="/blog" className="blogviewbtn-alink">
                  <i className="fa fa-calendar alinkicon"></i>View All Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-work" className="ourwork">
        <div className="contwrap-in">
          <div className="heading-in" style={{ visibility: "visible" }}>
            <h2 className="htwo-in">Our Work</h2>
          </div>

          <ul className="wrkul">
            <li className="wrkulli" style={{ visibility: "visible" }}>
              <a
                href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                className="alinkwrk"
              ></a>
              <div className="columnswrk">
                <a
                  href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                  className="alinkwrk"
                ></a>
                <div className="columnwrk">
                  <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                  <div className="project-list">
                    <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                    <div
                      className="projectwrk"
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                      <div
                        className="projectcardwrk"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                        <a
                          href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                          className="projectimagewrk"
                        >
                          <img
                            width="600"
                            height="280"
                            src="https://www.jointviews.com/wp-content/uploads/2018/05/The-15-Crucial-Steps-of-Mobile-App-Development-1.jpg"
                            className="imgwrk"
                            alt=""
                            decoding="async"
                            srcset="https://www.jointviews.com/wp-content/uploads/2018/05/The-15-Crucial-Steps-of-Mobile-App-Development-1.jpg 600w, https://www.jointviews.com/wp-content/uploads/2018/05/The-15-Crucial-Steps-of-Mobile-App-Development-1-300x140.jpg 300w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />
                        </a>
                        <div className="projectdetailwrk">
                          <h2 className="htwowrk projecttitlewrk">
                            <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/">
                              Social Media Strategy For Online News Websites
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="wrkulli" style={{ visibility: "visible" }}>
              <a
                href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                className="alinkwrk"
              ></a>
              <div className="columnswrk">
                <a
                  href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                  className="alinkwrk"
                ></a>
                <div className="columnwrk">
                  <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                  <div className="project-list">
                    <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                    <div
                      className="projectwrk"
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                      <div
                        className="projectcardwrk"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                        <a
                          href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                          className="projectimagewrk"
                        >
                          <img
                            width="600"
                            height="280"
                            src="https://www.jointviews.com/wp-content/uploads/2018/05/Mobile-Game-Market-–-Statistics-FI.jpg"
                            className="imgwrk"
                            alt="Mobile Game Market – Statistics FI"
                            decoding="async"
                            srcset="https://www.jointviews.com/wp-content/uploads/2018/05/Mobile-Game-Market-–-Statistics-FI.jpg 600w, https://www.jointviews.com/wp-content/uploads/2018/05/Mobile-Game-Market-–-Statistics-FI-300x140.jpg 300w"
                            sizes="(max-width: 600px) 100vw, 600px"
                          />{" "}
                        </a>
                        <div className="projectdetailwrk">
                          <h2 className="htwowrk projecttitlewrk">
                            <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/">
                              Social Media Strategy For Online News Websites
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="wrkulli" style={{ visibility: "visible" }}>
              <a
                href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                className="alinkwrk"
              ></a>
              <div className="columnswrk">
                <a
                  href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                  className="alinkwrk"
                ></a>
                <div className="columnwrk">
                  <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                  <div className="project-list">
                    <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                    <div
                      className="projectwrk"
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                      <div
                        className="projectcardwrk"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                        <a
                          href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                          className="projectimagewrk"
                        >
                          <img
                            width="500"
                            height="350"
                            src="https://www.jointviews.com/wp-content/uploads/2018/05/Wearable-Technology-Shaping-the-Future-of-Education_featured-image.jpg"
                            className="imgwrk"
                            alt=""
                            decoding="async"
                            srcset="https://www.jointviews.com/wp-content/uploads/2018/05/Wearable-Technology-Shaping-the-Future-of-Education_featured-image.jpg 500w, https://www.jointviews.com/wp-content/uploads/2018/05/Wearable-Technology-Shaping-the-Future-of-Education_featured-image-300x210.jpg 300w"
                            sizes="(max-width: 500px) 100vw, 500px"
                          />{" "}
                        </a>
                        <div className="projectdetailwrk">
                          <h2 className="htwowrk projecttitlewrk">
                            <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/">
                              Social Media Strategy For Online News Websites
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="wrkulli" style={{ visibility: "visible" }}>
              <a
                href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                className="alinkwrk"
              ></a>
              <div className="columnswrk">
                <a
                  href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                  className="alinkwrk"
                ></a>
                <div className="columnwrk">
                  <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                  <div className="project-list">
                    <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                    <div
                      className="projectwrk"
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                      <div
                        className="projectcardwrk"
                        style={{
                          perspective: "1000px",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"></a>
                        <a
                          href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/"
                          className="projectimagewrk"
                        >
                          <img
                            width="630"
                            height="479"
                            src="https://www.jointviews.com/wp-content/uploads/2016/02/Transport-Manager-App1.jpg"
                            className="imgwrk"
                            alt=""
                            decoding="async"
                            srcset="https://www.jointviews.com/wp-content/uploads/2016/02/Transport-Manager-App1.jpg 630w, https://www.jointviews.com/wp-content/uploads/2016/02/Transport-Manager-App1-300x228.jpg 300w"
                            sizes="(max-width: 630px) 100vw, 630px"
                          />{" "}
                        </a>
                        <div className="projectdetailwrk">
                          <h2 className="htwowrk projecttitlewrk">
                            <a href="https://www.jointviews.com/work/social-media-strategy-for-online-news-websites/">
                              Social Media Strategy For Online News Websites
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="blogviewbtn">
            <a
              href="https://www.jointviews.com/portfolio"
              className="blogviewbtn-alink"
            >
              <i className="fa fa-calendar alinkicon"></i>View All Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}