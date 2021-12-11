import './App.css';
import Button from './components/Button/Button';
import SectionHeading from './components/SectionHeading/SectionHeading';
import SectionTop from './components/SectionTop/SectionTop';
import ServiceType from './components/ServiceType/ServiceType';
import PricePlan from './components/PricePlan/PricePlan';
import Info from './components/Info/Info';
import News from './components/News/News';
import macBook from './images/macbook.png';
import icon1 from './images/icon01.png';
import icon2 from './images/icon02.png';
import icon3 from './images/icon03.png';
import icon4 from './images/icon04.png';
import icon5 from './images/icon05.png';
import icon6 from './images/icon06.png';
import icon7 from './images/icon07.png';
import icon8 from './images/icon08.png';
import icon9 from './images/icon09.png';
import icon10 from './images/icon10.png';
import newsImg1 from './images/news01.png';
import newsImg2 from './images/news02.png';
import newsImg3 from './images/news03.png';
import newsImg4 from './images/news04.png';
import newsImg5 from './images/news05.png';
import newsImg6 from './images/news06.png';
import downloadImg from './images/download.png';

function App() {
  return (
    <div>
      {/* banner start */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand wow fadeInLeft" href="index.html"><span className="font-pink">\\\</span> Mache</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Our Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Prices</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <h1 className="wow fadeInLeft"><span>mache</span> free psd template</h1>
              <hr className="wow bounceIn" />
              <p className="wow fadeInRight">Elegant and clean PSD template, which you can download and use for free!</p>
              <p className="wow fadeInRight">You can easily modify the design to make it your own and help you get your project running faster.</p>
              <Button text="show more" value="btn btn-default" />
            </div>
          </div>
        </div>
      </section>

      {/* about us section start */}
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInLeft">
              <SectionHeading text="Powerfull PSD template available for free!" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              <h6>see the video :D</h6>
            </div>
            <div className="col-lg-7 wow slideInRight">
              <img src={macBook} alt="Macbook" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services section start */}
      <section className="our-services">
        <div className="container">
          <div className="row">
            <SectionTop h2Text="Our Services" pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" />
            <ServiceType imgUrl={icon1} text="fully editable" />
            <ServiceType imgUrl={icon2} text="free download" />
            <ServiceType imgUrl={icon3} text="modern design" />
            <ServiceType imgUrl={icon4} text="100% responsive" />
          </div>
        </div>
      </section>

      {/* Quote section start */}
      <section className="quotes">
        <div className="container-fluid">
          <div className="row wow bounceIn">
            <div className="col-lg-12">
              <span>“</span>
            </div>
            <div className="col-2 col-lg-2 offset-lg-1 fa-lft">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div className="col-8 col-lg-6 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, std do eiusmod tempor incididunt ut labore tet dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
            </div>
            <div className="col-2 col-lg-2 fa-lft">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12">
              <span>„</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prices section start */}
      <section className="prices">
        <div className="container">
          <div className="row">
            <SectionTop h2Text="Check Our Prices" pText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" />
            <PricePlan price="19" plan="standard" projectNum="5" storageCapacity="200 MB" />
            <PricePlan price="39" plan="business" projectNum="15" storageCapacity="1 GB" />
            <PricePlan price="59" plan="premium" projectNum="30" storageCapacity="2 GB" />
            <PricePlan price="99" plan="unlimited" projectNum="unlimited" storageCapacity="unlimited" />
          </div>
        </div>
      </section>

      {/* Additional Info section start */}
      <section className="additional-info">
        <div className="container">
          <div className="row">
            <Info imgUrl={icon5} h6Text="high resolution" pText="Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Info imgUrl={icon6} h6Text="photography" pText="Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Info imgUrl={icon7} h6Text="easy to customize" pText="Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Info imgUrl={icon8} h6Text="24/7 support" pText="Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Info imgUrl={icon9} h6Text="powerful theme" pText="Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Info imgUrl={icon10} h6Text="seo optimization" pText="Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
        </div>
      </section>

      {/* join us section start */}
      <section className="join-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 wow fadeInLeft">
              <h1>Became A Part Of <span>Mache</span> Community Today</h1>
            </div>
            <div className="col-lg-2 wow fadeInRight">
              <Button text="join us" />
            </div>
          </div>
        </div>
      </section>

      {/* news section start */}
      <section className="news">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center wow fadeInLeft">
              <h2>Our Latest Updates</h2>
              <hr />
            </div>
            <div className="col-lg-8 offset-lg-2 text-center wow fadeInRight">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            <News imgUrl={newsImg1} h6Text="lorem ipsuma dolor sit" pText="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et" />
            <News imgUrl={newsImg2} h6Text="lorem ipsuma dolor sit" pText="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et" />
            <News imgUrl={newsImg3} h6Text="lorem ipsuma dolor sit" pText="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et" />
            <News imgUrl={newsImg4} h6Text="lorem ipsuma dolor sit" pText="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et" />
            <News imgUrl={newsImg5} h6Text="lorem ipsuma dolor sit" pText="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et" />
            <News imgUrl={newsImg6} h6Text="lorem ipsuma dolor sit" pText="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et" />
            <div className="col-lg-12 text-center">
              <h6>show more</h6>
              <i className="fa fa-angle-down wow fadeInDown" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>

      {/* offer section start */}
      <section className="more-additional-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center wow fadeInLeft">
              <SectionHeading text="Mache Free PSD Template" />
            </div>
            <div className="col-lg-8 offset-lg-2 text-center wow fadeInRight">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button text="show more" />
            </div>
          </div>
        </div>
      </section>

      {/* download section start */}
      <section className="download">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 wow slideInLeft">
              <img src={downloadImg} alt="Safari Browser" className="img-fluid" />
            </div>
            <div className="col-lg-5 wow pulse">
              <SectionHeading text="Please share some love by appreciate it and download!" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              <Button text="download now" />
            </div>
          </div>
        </div>
      </section>

      {/* footer section start */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 wow fadeInLeft">
              <p>&copy; 2021 copyright mache template</p>
            </div>
            <div className="col-md-4 col-lg-3 text-right wow fadeInRight">
              <p>designed by xyz</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
