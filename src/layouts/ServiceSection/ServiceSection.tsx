import Service from '../../components/Service';
import './ServiceSection.scss';


const data = [
    {
        sIconHrf: './images/service1.svg',
        sName: 'Learn More Online',
        sDesc: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.'
    },
    {
        sIconHrf: './images/service2.svg',
        sName: 'Writing Notes',
        sDesc: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.'
    },
    {
        sIconHrf: './images/service3.svg',
        sName: 'Interactive Sessions',
        sDesc: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.'
    },
    {
        sIconHrf: './images/service4.svg',
        sName: 'Life Time Support',
        sDesc: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.'
    },
]



const ServiceSection = () => {
    return (
        <div className='service-section container'>
            <h2 className="section__title">How It Work</h2>
            <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p>
            <div className="wrapper">
                {data.map((s: any, i: number) =>
                    <Service service={s} key={i} />
                )}
            </div>
        </div>
    )
}

export default ServiceSection;