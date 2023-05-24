import { Post } from "../../store/models/posts";
import { Link } from "react-router-dom";
import "./Article.scss";

const Article: React.FC<Post> = (props) => {
  const { title, excerpt, featured_image_src, content, id } = props;
  return (
    <article className="article">
      <img src={featured_image_src} alt="blog" className="article__img" />
      <div className="article__content">
        <h3
          className="article__title"
          dangerouslySetInnerHTML={{ __html: title.rendered }}
        ></h3>
        <p className="article__text">{excerpt.rendered}</p>
        <Link to={`posts/${id}`} className="article__link">
          Oqish...
        </Link>
      </div>
    </article>
  );
};

export default Article;
