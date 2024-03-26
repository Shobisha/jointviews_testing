import Head from 'next/head'
import React, { useState } from 'react'

const portfolio = () => {
   
    const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <>
          <Head>
        <title>Portfolio</title>
      </Head>
      <section id="inner-page-banner" className='bannerco'>
    <div className="imgbanner infocon">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center wow zoomIn animated" style={{ visibility: 'visible' }}>
                    <h1 className='hone'>Portfolio</h1>
                </div>
                <div className="col-md-8 text-center wow zoomIn animated" style={{ visibility: 'visible' }}>
                    <h2 className='htwo'>Enjoy Online Success with JointViews Content Marketing Agency</h2>
                </div>
                
            </div>
        </div>
    </div>
</section>
<section id="breadcrumb" className='breadcrumb'>
            <div className="container">
                <div className='row'>
                    <ul className='breadcrumbul'>
                    <li className='breadcrumbulli'>
                          <a href="" rel="nofollow" className='alink'>Home</a>
                          </li>
                        <li  className='breadcrumbullicon'>Portfolio</li>
                   
                        
                        
                        
                    </ul>
                </div>
            </div>
        </section>
        <section className='pagecontwrap-port'>
<div className='contwrap-in'>
    <div>
        <div className='row'>
            <div className='col-xs-12 col-sm-12'>
                <section className='portfolio' id='portfolio'>
                    <div className='container'>
                     
                    <ul className='portfoliofilter-port'>
      <li className='portlist'>
        <button
          className={`btnport aport ${selectedButton === 'all' && 'selected'}`}
          onClick={() => handleClick('all')}
        >
          All Works
        </button>
      </li>
      <li className='portlist'>
        <button
          className={`btnport aport ${selectedButton === 'infographics' && 'selected'}`}
          onClick={() => handleClick('infographics')}
        >
          Infographics
        </button>
      </li>
      <li className='portlist'>
        <button
          className={`btnport aport ${selectedButton === 'slides' && 'selected'}`}
          onClick={() => handleClick('slides')}
        >
          Slides
        </button>
      </li>
      <li className='portlist'>
        <button
          className={`btnport aport ${selectedButton === 'thoughts' && 'selected'}`}
          onClick={() => handleClick('thoughts')}
        >
          Thoughts
        </button>
      </li>
      <li className='portlist'>
        <button
          className={`btnport aport ${selectedButton === 'videos' && 'selected'}`}
          onClick={() => handleClick('videos')}
        >
          Videos
        </button>
      </li>
      <li className='portlist'>
        <button
          className={`btnport aport ${selectedButton === 'webdesign' && 'selected'}`}
          onClick={() => handleClick('webdesign')}
        >
          Web Design
        </button>
      </li>
    </ul>
    <div className='spcecontainer'>
    <div className='portfolioitems-port isotope-port row' style={{position: "relative", overflow:"hidden"}}>
    <div className=" col-xs-12 col-sm-12 col-md-4 col-lg-3 m-0 px-0">
      <div className="recentworkk">  
      <div className='overlaypo'>
            <h3 className='hthreeportt'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportho"
 >Social Media Strategy For Online News Websites</a></h3>
            <a href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"  className="aportho"><i className="fa fa-eye"></i> View</a>
          </div></div>
    </div>
    <div className="portfolio-item apps infographics  col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/The-15-Crucial-Steps-of-Mobile-App-Development-1.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">The 15 Crucial Mobile App Development Process Steps</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps infographics  col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Mobile-Game-Market-–-Statistics-FI.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">The Mobile Game Market Statistics</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps infographics  col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Wearable-Technology-Shaping-the-Future-of-Education_featured-image.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Wearable Technology Shaping The Future of Education</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Transport-Manager-App1.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Transport Manager App</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Track-School-Bus-Upgraded-School-bus-tracking-system.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Track School Bus - Upgraded School bus tracking system</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/testbytes-For-Software-Testing.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">testbytes For Software Testing</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/smartcard-solutions-for-schools.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">smartcard solutions for schools</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="images/ProBytes-Ecommerce-Development-Packages.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">ProBytes Ecommerce Development Packages</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/ParentApp-Video-How-to-Use.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">ParentApp Video - How to Use</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Parentapp-from-Edsys.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Parentapp from Edsys</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Jointviews-Digital-Marketing-Agency.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Jointviews - Digital Marketing Agency</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/geo-tool.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">geo tool</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Bus-Attendant-App.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Bus Attendant App</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Best-Work-Force-Management-System-from-RIMS.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Best Work Force Management System from RIMS</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/Being-Empowered-With-RFID-for-School-Attendance-Management.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Being Empowered With RFID for School Attendance Management</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/batman-vs-superman.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">batman vs superman</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/video-image.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Jointviews Digital Marketing Agency India</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/anim201.gif" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">12 Awesome Applications Of RFID Technology</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/animation21.gif" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">10 EYFS Activities To Improve Children's Numerical Ability</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/digital-11.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Digital Marketing 2014</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/gps-copy-2011.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Evolution OF GPS</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/history-of-education-copy-21.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">History Of Education Software</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/literacy-in-indiaindia-1231.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Literacy In India</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/mobile-apps-info-copy-11.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Mobile Apps and Childhood Education</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/8-things-copy-201.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">8 Areas that Would Be Transformed By Smartcards in Future</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/thumb_driver_console.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Drivers Console</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/redport.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Redbytes.in</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/jointviews.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Jointviews - Digital Marketing Agency</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/health.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Health will no longer be an issue</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/wifi.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">The Future of WiFi Attendance</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/discharge.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Discharge Accelerator</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/testbytes.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Better Software Quality</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/testby.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Testbytes.net</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/safety.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Student Safety Ebook</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/student-safe.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Student Safety Awareness</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/best-parentapp.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Best Parent App From Edsys</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/fpl_thumbnail.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Fantasy Popcorn League</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/parent-app-a-mobile-application-for-parents-1-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Parent app - for parents</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/technoalliance-team-of-teams-2-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Technoalliance - Team of Teams</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/probytes-delivery-methodology-1-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Probytes Delivery Methodology</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/never-miss-schoolbus.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Never miss your school bus</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/techno.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">TechnoAlliance.ae
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/edsys.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Edsys.in
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/track.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">TrackSchoolBus.com
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/track-school-bus-6-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Trackschoolbus
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/edubreaksan-education-based-job-portal-8-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Edubreaks
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/redbytes-your-one-stop-destination-for-creating-mobile-apps-5-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Redbytes
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/test.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">testbytes For Software Testing
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/work-force.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Work Force Management System
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/parent-app.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Parentapp from Edsys
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/parent-app-how-to-use.png" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">ParentApp Video - How to Use
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/testbytes-ensuring-software-quality-on-time-13-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Testbytes - Software Quality
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/bus.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">School Bus Tracking System
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/probytes-corporate-presentation-7-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Probytes Corporate
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-item apps video col-xs-12 col-sm-12 col-md-4 col-lg-3 isotope-item m-0 px-0">
      <div className="recentworkwrap">
        <img className="imgport" src="/images/digital-marketing-agency-10-638.jpg" alt="" />
        <div className="overlayport">
          <div className="recentworkinner">
            <h3 className='hthreeport'><a href="/work/social-media-strategy-for-online-news-websites/"  className="aportfo">Digital Marketing Agency
</a></h3>
            <a className="aportfo" href="/work/social-media-strategy-for-online-news-websites/" rel="prettyPhoto"><i className="fa fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>

</div></div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
        </section>
    </>
  )
}

export default portfolio
