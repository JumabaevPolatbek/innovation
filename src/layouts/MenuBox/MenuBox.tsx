import "./MenuBox.scss";
import { FaUserGraduate, FaAddressCard, FaUserTie } from "react-icons/fa";
const MenuBox = () => {
  return (
    <ul className="menubox container">
      <li>
        <a href="faculties">
          <span>
            <FaUserGraduate />
          </span>
          <span> FAKULTETLAR </span>
        </a>
      </li>
      <li>
        <a href="contacts">
          <span>
            <FaAddressCard />
          </span>
          <span>VIRTUVAL QABULXONA</span>
        </a>
      </li>
      <li>
        <a href="library">
          <span className="icon-books"></span>
          <span>VIRTUAL KUTUBXONA </span>
        </a>
      </li>
      <li>
        <a href="contacts">
          <span>
            <FaUserTie />
          </span>
          <span>QABUL</span>
        </a>
      </li>
    </ul>
  );
};

export default MenuBox;
