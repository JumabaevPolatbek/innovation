import React from "react";
import "./Course.scss";

type Props = {
  course: {
    title: string;
    price: string;
  };
};
const Course: React.FC<Props> = ({ course }) => {
  return (
    <div className="course">
      <div className="course__info">
        <p className="course__type">{course.title}</p>
        <h4 className="course__name">TA’LIM SHAKLLARI</h4>
        <span className="course__name">Kunduzgi | Sirtqi</span>
        <h4 className="course__name">To’lov Shartnoma</h4>
        <span className="course__name">{course.price}</span>
      </div>
      <div className="course__img">
        <img src="./images/course.png" alt="course" className="course__logo" />
      </div>
    </div>
  );
};

export default Course;
