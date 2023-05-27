import Socials from "../../components/Socials";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="layer">
        <div className="container">
          <div className="footer-info">
            <img src="/images/NII.png" alt="logo" className="footer__logo" />
            <h4 className="footer__desc">
              Vazirlar Mahkamasi ta`lim sifatini nazorat qilish davlat
              inspeksiya litseinziyasiga ega Nukus shahrida joylashgan yangi
              nodavlat institut!
            </h4>
          </div>
          <div className="footer-contact">
            <h3 className="title">Aloqa</h3>
            <ul className="info">
              <li>Tel: +998 88 399 48 49</li>
              <li>Faks: +998 71 233-37-48</li>
              <li>e-mail: info@nukusinnovatsion.uz</li>
              <li>
                O‘zbekiston Respublikasi, 100047. Toshkent sh., Sayilgoh ko‘ch.,
                35 uy
              </li>
            </ul>
            <ul className="social__links">
              {/* <li>
                <a href="#">
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-telegram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-youtube-play"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-facebook"></span>
                </a>
              </li> */}
              <Socials />
            </ul>
          </div>
          {/* <div className="footer-location">
            <h3 className="title">Joylashuv</h3>
            <img
              src="./images/location.png"
              alt="location"
              className="location"
            />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
