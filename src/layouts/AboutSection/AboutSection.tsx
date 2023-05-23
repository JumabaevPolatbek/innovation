import './AboutSection.scss';


const AboutSection = () => {

    return (
        <div className='about-section container'>
            <div className="section__content">
                <h2 className="section__title">Institut haqida</h2>
                <p className="section__description">Nukus innovatsion instituti Qoraqalpog’iston Respublikasi Xo’jayli tumanida joylashgan. Qoraqalpog’istondagi birinchi xususiy Oliy ta’lim muassasi bo’lib 2022-yil noyabr oyidan ish boshlagan. Hozirgi kunga kelib 3000 dan ortiq talabaga 60ga yaqin professor – o’qituvchilar ta’lim – tarbiya bermoqda. Umumiy 7 yo’nalish mavjud. Ta’lim turlari kunduzgi va sirtqi.</p>
                {/* <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p> */}
                <a href="about" className="section__link">Oqish</a>
            </div>
            <video src="" className='section__video' poster='./images/poster.jpg' controls></video>
        </div>
    )
}

export default AboutSection;