import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <>
      <li>
        <Link to="https://t.me/NUKUS_INNOVATSION_INSTITUTI">
          <span>
            <FaTelegramPlane />
          </span>
        </Link>
      </li>
      <li>
        <Link to="https://www.youtube.com/@innovatsioninstitut">
          <span>
            <FaYoutube />
          </span>
        </Link>
      </li>
      <li>
        <Link to="https://www.instagram.com/nukus_innovatsion_instituti_1/">
          <span>
            <FaInstagram />
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span>
            <FaFacebookF />
          </span>
        </Link>
      </li>
    </>
  );
};
export default Socials;
