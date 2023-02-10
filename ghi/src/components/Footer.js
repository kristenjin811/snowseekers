

function Footer() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">SnowSeekers is dedicated to helping you plan and keep track of all the amazing ski resorts you want to visit. Whether you're a seasoned skier or a beginner, there's always a new mountain to explore and new trails to conquer. With our easy-to-use interface, you can add new ski resorts to your list, view detailed information about each one, and even keep track of the resorts you've already visited. So grab your skis, pack your bags, and get ready to check off some incredible ski resorts from your bucket list!</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="https://kristenjin811.gitlab.io/snowseekers/">HomePage</a></li>
                <li><a href="https://kristenjin811.gitlab.io/snowseekers/all/">Ski Resorts List</a></li>
                <li><a href="https://kristenjin811.gitlab.io/snowseekers/new/">Add new resort</a></li>

              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="https://kristenjin811.gitlab.io/snowseekers/">About Us</a></li>
                <li><a href="https://kristenjin811.gitlab.io/snowseekers/">Contact Us</a></li>
                <li><a href="https://kristenjin811.gitlab.io/snowseekers/">Contribute</a></li>
                <li><a href="https://kristenjin811.gitlab.io/snowseekers//">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by SnowSeekers.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="https://twitter.com/?lang=en"><i className="fa fa-twitter"></i></a></li>
                <li><a className="dribbble" href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/feed/"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
