import StatInfo from '../../components/StatInfo';
import './Statistics.scss';

const data = [
    {
        count: 85,
        info: 'Teachers'
    },
    {
        count: 850,
        info: 'Students'
    },
    {
        count: 55,
        info: 'Cources'
    },
    {
        count: 25,
        info: 'Country'
    },
]


const Statistics = () => {
    return (
        <div className='statistics'>
            <div className="container">
                {data.map((stat: any, i: number) =>
                    <StatInfo stat={stat} key={i} />)}
            </div>
        </div>
    )
}

export default Statistics;