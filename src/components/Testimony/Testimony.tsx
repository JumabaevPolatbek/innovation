import './Testimony.scss';



const Testimony = () => {
    return (
        <div className='testimony'>
            <p className='opinion'>
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.
            </p>
            <div className="info">
                <img src="./images/avatar.jpg" alt="avatar" className="avatar" />
                <div className="bio">
                    <p className="name">Jony Ahmed</p>
                    <p className="job">UI/UX Student</p>
                </div>
            </div>
        </div>
    )
}

export default Testimony;