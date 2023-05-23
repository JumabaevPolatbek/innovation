import './Service.scss';

type Props = {
    service: {
        sIconHrf: string;
        sName: string;
        sDesc: string;
    }
}

const Service = ({ service }: Props) => {

    return (
        <div className="service">
            <img src={service.sIconHrf} alt={service.sName} className="service__img" />
            <h3 className="service__title">{service.sName}</h3>
            <p className="service__desc">{service.sDesc}</p>
        </div>
    )
}

export default Service;