import './Article.scss';

const Article = () => {
    return (
        <article className='article'>
            <img src="./images/blog1.jpg" alt="blog" className="article__img" />
            <div className="article__content">
                <h3 className="article__title">Product Marketing Creative Camping Brand Image</h3>
                <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum provident sapiente, ipsum perspiciatis ea tempore corrupti iste beatae eum similique unde saepe natus non eligendi et, dicta magni ad.</p>
                <a href='#' className='article__link'>Read More...</a>
            </div>
        </article>
    )
}

export default Article;