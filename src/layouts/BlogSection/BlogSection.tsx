import Article from "../../components/Article";
import { useGetPostsQuery } from "../../store/reducer/postSlice";
import "./BlogSection.scss";

const BlogSection = () => {
  const { data } = useGetPostsQuery();
  return (
    <div className="articles container">
      <h2 className="title">Institut haqida</h2>
      {/* <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.</p> */}
      <div className="wrapper">
        {data?.map((post, index) => {
          if (index < 6) {
            return <Article key={post.id} {...post} />;
          }
        })}
      </div>
      <a href="news" className="link-btn">
        View All
      </a>
    </div>
  );
};

export default BlogSection;
