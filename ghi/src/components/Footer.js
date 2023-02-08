import { NavLink } from 'react-router-dom';
import Logo from '../myLogo.svg'


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
              <p className="text-justify">SnowSeeker  is an innovative solution for managing ski resorts. With a user-friendly interface, it allows users to easily view and interact with a list of ski resorts, including key information such as location and number of ski runs. Additionally, the program provides options for editing and deleting ski resorts, giving users complete control over their ski resort data. The program has been designed with efficiency in mind, providing a fast and seamless experience for users. Whether you're a ski enthusiast, a resort manager, or just looking for a convenient way to keep track of your favorite ski destinations, this program has you covered.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">HomePage</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Ski Resorts List</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Add new resort</a></li>

              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
          <a href="#"> SnowSeeker</a>.
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
