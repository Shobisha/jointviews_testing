import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CarouselPage = () => {
  const splideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    if (splideRef.current) {
      splideRef.current.go(index);
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="section solution-slider">
        <div className="container">
          <div className="section-slider text-center">
            <h2>Testimonials</h2>
            <Splide
              options={{
                perPage: 1,
                rewind: true,
                autoplay: true,
                interval: 6000,
                pagination: false,
                gap: "1rem",
              }}
              aria-label="customList"
              ref={splideRef}
              onMoved={(splide, newIndex) => setActiveIndex(newIndex)}
            >
              <SplideSlide>
                <div className="solution-item">
                  <div className="imgDiv-carousel">
                    <img
                      src="/images/neena.png"
                      alt="partners_logo"
                      className="img-responsive"
                    />
                  </div>
                  <div className="slideSecond">
                    <p>
                      Human Resource Management is always a tough job despite
                      the company. However, in Jointviews the management has
                      made the job easier and interesting. They have never made
                      me feel that I’m alone in this job. Jointviews prime motto
                      has always been coupling working and other activities so
                      that a healthy work style can be nurtured.
                    </p>
                    <h4>Neena Girish</h4>
                    <h6>HR</h6>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="solution-item">
                  <div className="imgDiv-carousel">
                    <img
                      src="/images/vishnu.jpg"
                      alt="partners_logo"
                      className="img-responsive"
                    />
                  </div>
                  <div className="slideSecond">
                    <p>
                      Resources are plenty when it comes to Jointviews. Our team
                      consists of many creative artists such as Motion Graphic
                      Artists, Graphic Designers, Content Writers/Marketers, SEO
                      specialists, Social Media Marketers, Web Designers,
                      Wordpress Developers, Mobile UI/UX Designers, etc. The
                      team is fully equipped to provide a full suite of digital
                      marketing services as well as creative services. It’s a
                      privilege to work with a dream team.
                    </p>
                    <h4>Vishnu</h4>
                    <h6>Content Writer</h6>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="solution-item">
                  <div className="imgDiv-carousel">
                    <img
                      src="/images/arun.jpg"
                      alt="partners_logo"
                      className="img-responsive"
                    />
                  </div>
                  <div className="slideSecond">
                    <p>
                      Challenges are always exciting for me. Jointviews has
                      given me opportunities to face plenty of challenges that
                      have resulted in betterment of me as SEO Analyst.
                    </p>
                    <h4>Arun</h4>
                    <h6>SEO Specialist</h6>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="solution-item">
                  <div className="imgDiv-carousel">
                    <img
                      src="/images/joel.jpg"
                      alt="partners_logo"
                      className="img-responsive"
                    />
                  </div>
                  <div className="slideSecond">
                    <p>
                      Jointviews has always managed to focus on not just work
                      alone. As an employee I was surprised at first to see how
                      jovial the atmosphere in here is.
                    </p>
                    <h4>Joel</h4>
                    <h6>Motion Graphic Artist</h6>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="solution-item">
                  <div className="imgDiv-carousel">
                    <img
                      src="/images/kesavan.jpg"
                      alt="partners_logo"
                      className="img-responsive"
                    />
                  </div>
                  <div className="slideSecond">
                    <p>
                      Team Spirit is enjoyed and celebrated so much inside the
                      company. There is always a helping hand in achieving
                      complex work related tasks.
                    </p>
                    <h4>Kesavan</h4>
                    <h6>Graphic Designer</h6>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            {/* Custom indicators */}
            <div className="custom-indicators">
              <button
                className={activeIndex === 0 ? "active" : ""}
                onClick={() => goToSlide(0)}
              ></button>
              <button
                className={activeIndex === 1 ? "active" : ""}
                onClick={() => goToSlide(1)}
              ></button>
              <button
                className={activeIndex === 2 ? "active" : ""}
                onClick={() => goToSlide(2)}
              ></button>
              <button
                className={activeIndex === 3 ? "active" : ""}
                onClick={() => goToSlide(3)}
              ></button>
              <button
                className={activeIndex === 4 ? "active" : ""}
                onClick={() => goToSlide(4)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
