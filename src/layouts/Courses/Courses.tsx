import React from "react";
import Course from "../../components/Course";
import "./Courses.scss";
const courses = [
  {
    title: "Boshlang’ich ta’lim faoliyat yo’nalishi bo’yicha",
    price: "11 000 000 | 9 800 000",
  },
  {
    title: "Maktabgacha ta’lim faoliyat yo’nalishi bo’yicha",
    price: "11 000 000 | 9 800 000",
  },
  {
    title: "Pedagogika va Psixologiya faoliyat yo’nalishi bo’yicha",
    price: "11 000 000 | 9 800 000",
  },
  {
    title: "I.T Dastur injinering faoliyat yo’nalishi bo’yicha",
    price: "12 000 000 | 10 800 000",
  },
  {
    title: "Buxgalteriya hisobi va audit faoliyat yo’nalishi bo’yicha",
    price: "14 000 000 | 11 800 000",
  },
  {
    title: "Moliya va moliyaviy texnologiyalari faoliyat yo’nalishi bo’yicha",
    price: "11 800 000 | 14 750 000",
  },
  {
    title: "Filologiya (inglis tili) faoliyat yo’nalishi bo`yicha",
    price: "11 000 000",
  },
];
const Courses = () => {
    // const [active, setActive] = React.useState<string>('')
    
  return (
    <div className="courses-section container">
      <h3 className="title">Yo‘nalishlar</h3>
      <ul className="tabs">
        <li className="active">Ekonomika</li>
        <li>Matematika</li>
        <li>Ximiya texnologıya</li>
        <li>Filologıya</li>
        <li>Fizika</li>
      </ul>
      <div className="tab__content">
        {courses.map((course, index) => (
          <Course course={course} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
