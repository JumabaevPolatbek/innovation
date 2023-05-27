import { Link, useParams } from "react-router-dom";
import "./PostLink.scss";
import {
  useGetPostQuery,
  useGetPostsQuery,
} from "../../store/reducer/postSlice";
import { Post } from "../../store/models/posts";
type Props = {
  postId: number;
};

const PostLink: React.FC<Props> = ({ postId }) => {
  const { id } = useParams();
  const { data } = useGetPostsQuery();
  var find = data?.findIndex((post) => post.id === Number(id));
  var post: Post | null;
  if (data) {
    post = data[find || 0 + postId];
  } else post = null;
  if (post === null) {
    return <div>Loading ...</div>;
  }
  return (
    <Link to={`/posts/${post.id}`} className="post-link">
      <h4
        className="post-link__title"
        dangerouslySetInnerHTML={{ __html: post.uagb_excerpt }}
      ></h4>
      <div
        style={{
          backgroundImage: `url(${post.uagb_featured_image_src.medium[0]})`,
        }}
        className="post-link__img"
      ></div>
      <p className="post-link__date">{`${
        new Date(post.date).getDate() +
        "-" +
        new Date(post.date).getMonth() +
        "-" +
        new Date(post.date).getFullYear()
      }`}</p>
    </Link>
  );
};

export default PostLink;
