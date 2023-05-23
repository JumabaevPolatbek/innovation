import "./Event.scss";

const Event = () => {

    return (
        <div className="event">
            <p className="event__date">
                <span>10</span>
                <span>Apr</span>
            </p>
            <img src="./images/event1.jpg" alt="event" className="event__img" />

            <div className="event__info">
                <h3 className="event__title">TED Talks at UCF College of Education</h3>
                <div className="event__data">
                    <p className="event__time">
                        <span>4.00 pm</span> - <span>8.00 pm</span>
                    </p>
                    <p className="event__location"> <span>Bangladesh</span></p>
                </div>
            </div>
        </div>
    )
}

export default Event;