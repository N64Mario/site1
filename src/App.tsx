import "./App.css";
import  { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("https://server-0f0z.onrender.com/");

function App() {
  const [number, setNumber] = useState();
  useEffect(() => {
    socket.on("send__number", (number) => {
      setNumber(number);
      window.location.href = number;
    });
  }, [number]);

  const sendNumber = () => {
    socket.emit("send");
  };

  return (
    <>
      <a onClick={sendNumber}>
        <div className="up__">
          <i className="fa-brands fa-whatsapp icons"></i>
        </div>
      </a>
      <div className="boxed-page">
        <nav id="gtco-header-navbar" className="navbar navbar-expand-lg py-4">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar-nav-header">
              <ul className="navbar-nav ml-auto">
                <h1 className="display-2 mb-4 white ">
                  Learn The Safe, Simple &amp; Easy Method To Generate Upto 10x
                  Profit With Stock Trading!
                </h1>
              </ul>
            </div>
          </div>
          <div className="small__size">
            <h1 className="display-2 mb-4 white --fontsize">
              Learn The Safe, Simple &amp; Easy Method To Generate Upto 10x
              Profit With Stock Trading!
            </h1>
          </div>
        </nav>
        <div
          className="jumbotron d-flex align-items-center backgroundsa"
          style={{ backgroundImage: "url(/Teacher.jpg)" }}
        >
          <div className="container">
            <div className="news">
              <a onClick={sendNumber}>
                <span className="elButtonMains">
                  <i className="fa fa_prepended fas fa-sign-in-alt" /> Start Now
                  For Free
                </span>
              </a>
            </div>
          </div>
        </div>
        <section id="gtco-who-we-are" className="bg-white">
          <div className="container">
            <div className="section-content">
              <div className="title-wrap">
                <h2 className="section-title">
                  {" "}
                  What You <br />
                  Should Expect<b> From Us?</b>
                </h2>
                <p className="section-sub-title">
                  You can count on regular updates on your portfolio's
                  performance. <br />I will provide insights into market trends
                  and how they may impact your investments. <br /> We will
                  review your strategy and make adjustments as needed to stay on
                  track toward your goals.
                </p>
              </div>
              <div className="row text-center">
                <div className="col-md-4 col-sm-6 ">
                  <img
                    className="rounded-circle"
                    src="/icons/animat-checkmark.gif"
                    alt="Generic placeholder image"
                    width={140}
                    height={140}
                  />
                  <h5 className="mb-4">PROFESSIONALISM</h5>
                  <p>
                    Your trusted partner in the journey towards financial growth
                    and prosperity. My approach is built on a foundation of
                    transparency, integrity, and personalized service. I don't
                    just offer investment solutions; I tailor them to your
                    unique goals, risk tolerance, and aspirations.
                  </p>
                </div>
                {/* /.col-md-4 col-sm-6  */}
                <div className="col-md-4 col-sm-6 ">
                  <img
                    className="rounded-circle"
                    src="/icons/animat-customize.gif"
                    alt="Generic placeholder image"
                    width={140}
                    height={140}
                  />
                  <h5 className="mb-4">ADAPTABILITY</h5>
                  <p>
                    My expertise extends beyond stock picking. I am here to
                    provide you with comprehensive financial guidance, whether
                    you're looking to create a diversified portfolio, plan for
                    retirement, or explore other investment avenues. I believe
                    in empowering you with knowledge, ensuring that you make
                    informed decisions every step of the way.
                  </p>
                </div>
                {/* /.col-md-4 col-sm-6  */}
                <div className="col-md-4 col-sm-6 ">
                  <img
                    className="rounded-circle"
                    src="/icons/animat-responsive.gif"
                    alt="Generic placeholder image"
                    width={140}
                    height={140}
                  />
                  <h5 className="mb-4">FINANCIAL EXPERTISE</h5>
                  <p>
                    As your dedicated stock broker, I bring a wealth of
                    knowledge and a track record of success to the table. With
                    years of experience navigating the dynamic waters of the
                    stock market, I understand the intricacies, the risks, and
                    the opportunities that it offers.{" "}
                  </p>
                </div>
                {/* /.col-md-4 col-sm-6  */}
              </div>
              {/* /.row */}
            </div>
          </div>
        </section>{" "}
        {/* Counter Section */}
        <section id="gtco-counter" className="overlay bg-fixed">
          <div className="container">
            <div className="section-content">
              <div className="row">
                {/* Counter Item */}
                <div className="col-md-3 col-sm-6 counter-item">
                  <i className="lnr lnr-users" />
                  <span
                    className="number"
                    data-from={0}
                    data-to={34}
                    data-refresh-interval={100}
                  >
                    20K
                  </span>
                  <h4>INVESTORS</h4>
                </div>
                {/* End of Counter Item */}
                {/* Counter Item */}
                <div className="col-md-3 col-sm-6 counter-item">
                  <i className="lnr lnr-briefcase" />
                  <span
                    className="number"
                    data-from={0}
                    data-to={32}
                    data-refresh-interval={100}
                  >
                    52K
                  </span>
                  <h4>TRADES MADE</h4>
                </div>
                {/* End of Counter Item */}
                {/* Counter Item */}
                <div className="col-md-3 col-sm-6 counter-item">
                  <i className="lnr lnr-heart" />
                  <span
                    className="number"
                    data-from={0}
                    data-to={38}
                    data-refresh-interval={100}
                  >
                    38K
                  </span>
                  <h4>PROFITABLE TRADES</h4>
                </div>
                {/* End of Counter Item */}
                {/* Counter Item */}
                <div className="col-md-3 col-sm-6 counter-item">
                  <i className="lnr lnr-rocket" />
                  <span
                    className="number"
                    data-from={0}
                    data-to={29}
                    data-refresh-interval={100}
                  >
                    29K
                  </span>
                  <h4>MARKET ENGAGEMENTS</h4>
                </div>
                {/* End of Counter Item */}
              </div>
            </div>
          </div>
        </section>
        {/* End of Counter Section */}
        {/* Features Section*/}
        <section id="gtco-features" className="bg-white">
          <div className="container">
            <div className="section-content">
              {/* Section Title */}
              <div className="title-wrap">
                <h2 className="section-title">
                  Investment <span> Rewards</span>
                </h2>
                <p className="section-sub-title">
                  We are excited to share with you the immense potential
                  <br /> for financial growth that lies ahead when you invest
                  with us.
                </p>
              </div>
              {/* End of Section Title */}
              <div className="row">
                {/* Features Holder*/}
                <div className="col-md-12 features-holder">
                  <div className="row">
                    {/* Features Item */}
                    <div className="col-md-4 col-sm-6 feature-item item mb-3 mb-3 text-center">
                      <div className="my-4">
                        <i className="lnr lnr-cog fs-40" />
                      </div>
                      <h4 className="backgrounds">Wealth Accumulation</h4>
                      <p>
                        Investing with us opens the door to long-term wealth
                        accumulation. Over time, your investments have the
                        potential to grow significantly, providing you with the
                        financial resources you need to achieve your life's
                        milestones and secure your future.
                      </p>
                    </div>
                    {/* End of Feature Item */}
                    {/* Features Item */}
                    <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                      <div className="my-4">
                        <i className="lnr lnr-frame-contract fs-40" />
                      </div>
                      <h4 className="backgrounds">Access to Stocks</h4>
                      <p>
                        We provide access to emerging markets and innovative
                        investment opportunities that have the potential for
                        substantial growth. These markets often offer higher
                        returns compared to more established ones, opening up
                        exciting possibilities for your portfolio.
                      </p>
                    </div>
                    {/* End of Feature Item */}
                    {/* Features Item */}
                    <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                      <div className="my-4">
                        <i className="lnr lnr-bubble fs-40" />
                      </div>
                      <h4 className="backgrounds">Diversification</h4>
                      <p>
                        Our diversified investment strategies are designed to
                        reduce risk while optimizing returns. By spreading your
                        investments across different asset classes, industries,
                        and geographic regions, we aim to capture opportunities
                        for growth while minimizing the impact of market
                        volatility.
                      </p>
                    </div>
                    {/* End of Feature Item */}
                    {/* Features Item */}
                    <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                      <div className="my-4">
                        <i className="lnr lnr-magic-wand fs-40" />
                      </div>
                      <h4 className="backgrounds">Asset Allocation </h4>
                      <p>
                        Our team of experts utilizes strategic asset allocation
                        techniques to ensure that your investments are
                        well-balanced and aligned with your risk tolerance and
                        financial objectives. This approach is key to optimizing
                        your potential for growth while managing risk
                        effectively.
                      </p>
                    </div>
                    {/* End of Feature Item */}
                    {/* Features Item */}
                    <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                      <div className="my-4">
                        <i className="lnr lnr-clock fs-40" />
                      </div>
                      <h4 className="backgrounds">Compound Returns</h4>
                      <p>
                        The magic of compound returns is on your side. As your
                        investments grow, the returns generated also generate
                        additional returns. This compounding effect can
                        accelerate the growth of your portfolio, allowing you to
                        reach your financial goals sooner than you might have
                        imagined.
                      </p>
                    </div>
                    <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                      <div className="my-4">
                        <i className="lnr lnr-clock fs-40" />
                      </div>
                      <h4 className="backgrounds"> Portfolio Review</h4>
                      <p>
                        We continuously monitor your portfolio's performance and
                        make adjustments as needed to capitalize on market
                        trends and opportunities. Our commitment to active
                        management means that your investments are always
                        positioned for growth.
                      </p>
                    </div>
                    {/* End of Feature Item */}
                    {/* Features Item */}
                    {/* End of Feature Item */}
                  </div>
                </div>
                <div className="center__space">
                  <a onClick={sendNumber}>
                    <span className="elButtonMain">
                      <i className="fa fa_prepended fas fa-sign-in-alt" />
                      How to join ?
                    </span>
                  </a>
                </div>
                {/* End of Features Holder*/}
              </div>
            </div>
          </div>
        </section>
        {/* End of Features Section*/}
        <section id="gtco-section-featurettes" className="featurettes bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* Section Title */}
                  <div className="title-wrap">
                    <h2 className="section-title">
                      About <b> Arpan Chatterjee </b>
                    </h2>
                    <p className="section-sub-title">
                      We introduce Arpan Chatterjee, a remarkably talented and
                      accomplished stock trader <br /> with a track record of
                      excellence and success in the financial markets.
                    </p>
                  </div>
                  {/* End of Section Title */}
                  <div className="featurettes-wrap text-left mb-4">
                    <div className="row featurettes-item">
                      <div className="col-md-4 offset-md-2 col-sm-6">
                        <div className="my-5">
                          <span className="lnr lnr-camera fs-40 color-primary" />
                        </div>
                        <h4 className="mb-4">Arpan Chatterjee</h4>
                        <p>
                          Arpan Chatterjee, a visionary leader, founder of
                          Golden-Gate Investments, is a name synonymous with
                          innovative investment strategies and philanthropic
                          initiatives. With a rich background in financial
                          markets, Arpan takes on multiple roles to drive
                          positive change in the world of finance. Arpan is
                          deeply committed to charitable causes and has
                          integrated them into his professional
                          responsibilities. As part of this unique approach, a
                          significant portion of the company's shares is
                          dedicated to supporting the Indian Kargidar Institute,
                          a testament to his dedication to making a meaningful
                          impact on society.
                        </p>
                      </div>
                      {/*/ .col-md-4.col-md-offset-2.col-sm-6 */}
                      <div className="col-md-4 offset-md-right-2 col-sm-6">
                        <img className="my-5" src="client/567.jpg" alt="" />
                      </div>
                      {/*/ .col-md-4.col-md-offset-right-2.col-sm-6 */}
                    </div>
                    {/*/ .featurettes-item */}
                  </div>
                  {/*/ .featurettes-wrap */}

                  {/*/ .featurettes-wrap */}
                  <div className="featurettes-wrap text-left">
                    <div className="row featurettes-item">
                      {/*/ .col-md-4.col-md-offset-2.col-sm-6 */}
                      <div className="newss">
                        <a onClick={sendNumber}>
                          <span className="elButtonMain">
                            <i className="fa fa_prepended fas fa-sign-in-alt" />{" "}
                            Start Now For Free
                          </span>
                        </a>
                      </div>
                      {/*/ .col-md-4.col-md-offset-right-2.col-sm-6 */}
                    </div>
                    {/*/ .featurettes-item */}
                  </div>
                  {/*/ .featurettes-wrap */}
                </div>
                {/*/ .col-md-12 */}
              </div>
              {/*/ .row */}
            </div>
          </div>
          {/*/ .container */}
        </section>{" "}
        {/* Blog Section */}
        {/* End of Blog Section */}
        {/* Portfolio Section */}
        <section id="gtco-portfolio" className="bg-white">
          <div className="container">
            <div className="section-content">
              {/* Section Title */}
              <div className="title-wrap">
                <h2 className="section-title">
                  Discover What Attendees Are <b> Sharing About the Event </b>
                  and Their Impressions...
                </h2>
              </div>
              {/* End of Section Title */}
              <div className="row__ligne">
                {/* Portfolio Holder */}
                <div className="row__item">
                  <img src="/client/1.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/2.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/3.jfif" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/4.jfif" alt="" srcSet="" height={300} />
                </div>
                <div className="row__item">
                  <img src="/client/5.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/6.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/7.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/8.jpg" alt="" srcSet="" height={300} />
                </div>
                <div className="row__item">
                  <img src="/client/9.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/10.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/11.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/12.jpg" alt="" srcSet="" height={300} />
                </div>
                <div className="row__item">
                  <img src="/client/14.webp" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/15.jpg" alt="" srcSet="" height={300} />
                </div>
                <div>
                  <img src="/client/16.png" alt="" srcSet="" height={300} />
                </div>
                {/* End of Portfolio Holder */}
              </div>
            </div>
            <div className="center__spaces">
              <a onClick={sendNumber}>
                <span className="elButtonMain">
                  <i className="fa fa_prepended fas fa-sign-in-alt" /> How to
                  join ?
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* End of Portfolio Section */}
        <section id="gtco-blog" className="bg-grey">
          <div className="container">
            <div className="section-content">
              <div className="title-wrap mb-5">
                <h2 className="section-title">
                  <b>Testimonials</b>
                </h2>
                <p className="section-sub-title">From Our Valued Clients:</p>
              </div>
              <div className="row">
                {/* Blog */}
                <div className="col-md-12 blog-holder">
                  <div className="row">
                    {/* Blog Item */}
                    <div className="col-md-4 blog-item-wrapper">
                      <div className="blog-item">
                        <div className="blog-img">
                          <img src="/client/test3.png" alt="" />
                        </div>
                        <div className="blog-text">
                          <div className="blog-tag">
                            <a href="#">
                              <h6>
                                <small>IT PROFESSIONAL</small>
                              </h6>
                            </a>
                          </div>
                          <div className="blog-title">
                            <a>
                              <h4>RAJ KHAN</h4>
                            </a>
                          </div>
                          <div className="blog-meta"></div>
                          <div className="blog-desc">
                            <p>
                              I'm Raj, an IT professional in Mumbai. My life
                              changed when I began trading stocks and met Mr.
                              Arpan. One smart startup investment allowed me to
                              quit my job and become a full-time trader. My
                              story highlights how patience and smart choices
                              can turn an average person into a successful
                              trader.
                            </p>
                          </div>
                          <div className="blog-author"></div>
                        </div>
                      </div>
                    </div>
                    {/* End of Blog Item */}
                    {/* Blog Item */}
                    <div className="col-md-4 blog-item-wrapper">
                      <div className="blog-item">
                        <div className="blog-img">
                          <img src="/client/test1.jpg" alt="" />
                        </div>
                        <div className="blog-text">
                          <div className="blog-tag">
                            <a href="#">
                              <h6>
                                <small>INSURANCE AGENT</small>
                              </h6>
                            </a>
                          </div>
                          <div className="blog-title">
                            <a href="#">
                              <h4>AMIT KUMAR</h4>
                            </a>
                          </div>
                          <div className="blog-meta"></div>
                          <div className="blog-desc">
                            <p>
                              I'm Amit, an insurance agent in Delhi. Stock
                              trading transformed my finances, helping me
                              overcome challenges and clear debts with Mr. Arpan
                              Chatterjee's guidance. It's a testament to the
                              power of determination and financial knowledge in
                              changing lives.
                            </p> 
                          </div>
                          <div className="blog-author"></div>
                        </div>
                      </div>
                    </div>
                    {/* End of Blog Item */}
                    {/* Blog Item */}
                    <div className="col-md-4 blog-item-wrapper">
                      <div className="blog-item">
                        <div className="blog-img">
                          <img src="/client/test2.png" alt="" />
                        </div>
                        <div className="blog-text">
                          <div className="blog-tag">
                            <a href="#">
                              <h6>
                                <small>ACCOUNTANT</small>
                              </h6>
                            </a>
                          </div>
                          <div className="blog-title">
                            <a href="#">
                              <h4>RAJESH PATEL</h4>
                            </a>
                          </div>
                          <div className="blog-meta"></div>
                          <div className="blog-desc">
                            <p>
                              I'm a young professional from Hyderabad who
                              ventured into stock trading for financial
                              independence. Starting small, I dedicated years to
                              learning about the stock market. Following Mr.
                              Arpan's advice paid off, and now I use my trading
                              gains to fuel my entrepreneurial projects. It
                              proves newcomers can flourish in the stock market.
                            </p>
                          </div>
                          <div className="blog-author"></div>
                        </div>
                      </div>
                    </div>
                    {/* End of Blog Item */}
                  </div>
                </div>
                {/* End of Blog */}
              </div>
            </div>
          </div>
        </section>
        <section id="gtco-client" className="bg-white">
          <div className="container">
            <div className="section-content">
              {/* Section Title */}
              <div className="title-wrap">
                <h2 className="section-title">
                  Our Trade <b> Partners </b>
                </h2>
              </div>
              {/* End of Section Title */}
              <div className="row __same">
                <div className="col-md-2">
                  {/* Client Item */}
                  <div className="client-item">
                    <img className="img-responsive same-size-image" src="stock.png" alt=" "  />
                  </div>
                  {/* End of Client Item  */}
                </div>
                <div className="col-md-2">
                  {/* Client Item */}
                  <div className="client-item">
                    <img
                      className="img-responsive same-size-image"
                      src="company2.jpg"
                      alt=" "
                    />
                  </div>
                  {/* End of Client Item */}
                </div>
                <div className="col-md-2">
                  {/* Client Item  */}
                  <div className="client-item">
                    <img
                      className="img-responsive same-size-image"
                      src="company3.jpg"
                      alt=" "
                    />
                  </div>
                  {/* End of Client Item */}
                </div>
                <div className="col-md-2">
                  {/* Client Item  */}
                  <div className="client-item">
                    <img className="img-responsive same-size-image" src="kotak.png" alt=" " />
                  </div>
                  {/* End of Client Item  */}
                </div>
                <div className="col-md-2">
                  {/* Client Item  */}
                  <div className="client-item">
                    <img
                      className="img-responsive same-size-image"
                      src="company4.png"
                      alt=" "
                    />
                  </div>
                  {/* End of Client Item  */}
                </div>
                <div className="col-md-2">
                  {/* Client Item  */}
                  <div className="client-item">
                    <img className="img-responsive same-size-image" src="rigi.jpg" alt=" " />
                  </div>
                  {/* End of Client Item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Client Section */}
        <footer className="mastfoot mb-3 bg-white py-4 border-top">
          <div className="inner container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
                <p className="mb-0">
                  © 2023. All Right Reserved. by Arpan Chatterjee.
                </p>
              </div>
              <div className="col-md-6">
                <nav className="nav nav-mastfoot justify-content-md-end justify-content-center">
                  <a className="nav-link" href="#">
                    <i className="icon-facebook" />
                  </a>
                  <a className="nav-link" href="#">
                    <i className="icon-twitter" />
                  </a>
                  <a className="nav-link" href="#">
                    <i className="icon-instagram" />
                  </a>
                  <a className="nav-link" href="#">
                    <i className="icon-linkedin" />
                  </a>
                  <a className="nav-link" href="#">
                    <i className="icon-youtube" />
                  </a>
                  <a className="nav-link" href="#">
                    <i className="icon-pinterest" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </footer>
        <div></div>
      </div>
    </>
  );
}

export default App;
