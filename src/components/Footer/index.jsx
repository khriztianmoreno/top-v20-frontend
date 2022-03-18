function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              An employment website is a web site that deals specifically with
              employment or careers. Many employment websites are designed to
              allow employers to post job requirements for a position to be filled
              and are commonly known as job boards. Other employment sites offer
              employer reviews, career and job-search advice, and describe
              different job descriptions or employers. Through a job website a
              prospective employee can locate and fill out a job application.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Company</h6>
            <ul className="footer-links">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">How it works</a>
              </li>
              <li>
                <a href="/">Help center</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Trendeing jobs</h6>
            <ul className="footer-links">
              <li>
                <a href="/">Front-end developer</a>
              </li>
              <li>
                <a href="/">Android developer</a>
              </li>
              <li>
                <a href="/">iOS developer</a>
              </li>
              <li>
                <a href="/">Full stack developer</a>
              </li>
              <li>
                <a href="/">Project administrator</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyrights &copy;
              {new Date().getFullYear()}
              All Rights Reserved by
              <a href="https://khriztianmoreno.com"> Khriztianmoreno</a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="https://fb.com/khriztianmoreno">
                  facebook
                </a>
              </li>
              <li>
                <a className="twitter" href="https://twitter.com/khriztianmoreno">
                  twitter
                </a>
              </li>
              <li>
                <a className="dribbble" href="https://github.com/khriztianmoreno">
                  github
                </a>
              </li>
              <li>
                <a className="linkedin" href="/">
                  linkedin
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://instagram.com/khriztianmoreno"
                >
                  instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
