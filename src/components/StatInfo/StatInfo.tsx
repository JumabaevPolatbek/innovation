import './StatInfo.scss';

type Props = {
    stat: {
        count: number;
        info: string;
    }
}


const StatInfo = ({ stat }: Props) => {
    const { count, info } = stat;
    return (
        <div className='stat'>
            <h3 className='count'>{count}+</h3>
            <p className='info'>{info}</p>
        </div>
    )
}

export default StatInfo;