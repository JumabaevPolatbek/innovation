import { Link } from "react-router-dom";
import Post from "../../components/Post";
import PostLink from "../../components/PostLink";
import "./PostSection.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const PostSection = () => {
  return (
    <section className="post-section container">
      <Post />
      <div className="last-posts">
        <PostLink postId={1} />
        <PostLink postId={2} />
        <PostLink postId={3} />
      </div>

      <ul className="social__links">
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
      </ul>
    </section>
  );
};

export default PostSection;
