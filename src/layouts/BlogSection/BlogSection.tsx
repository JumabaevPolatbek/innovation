import Article from "../../components/Article";
import './BlogSection.scss';

const BlogSection = () => {
    return (
        <div className="articles container">
            <h2 className="title">Our Latest Blog</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.</p>
            <div className="wrapper">
                <Article />
                <Article />
                <Article />
            </div>
            <a href='#' className="link-btn">View All</a>
        </div>
    )
}

export default BlogSection;