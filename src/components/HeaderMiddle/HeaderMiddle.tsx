import { useState } from "react";
import HeaderBottom from "../HeaderBottom";
import "./HeaderMiddle.scss";
import { useGetPagesQuery } from "../../store/reducer/postSlice";

const HeaderMiddle = () => {
  const { data } = useGetPagesQuery();
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="header-middle">
      {/* <button className="header-bottom-btn" onClick={() => setOpenMenu(!openMenu)}>
                <span className="icon-grid"></span>
            </button>
            <HeaderBottom open={openMenu} />
             */}
      <ul className="menu">
        <div>
          <li className="first-item">
            <a href="/">
              <span>Institut haqida</span>
              <ul className="submenu">
                {data?.map((pages) => {
                  if (pages.slug === "rahbariyat" || pages.slug === "tuzilma") {
                    return (
                      <li key={pages.id}>
                        <a
                          href={
                            pages.slug === "rahbariyat"
                              ? "management"
                              : "structure"
                          }
                        >
                          {pages.title.rendered}
                        </a>
                      </li>
                    );
                  }
                })}
                {/* <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li> */}
              </ul>
            </a>
          </li>

          <li>
            <a href="faculties">
              <span>Fakultetlar</span>
              {/* <ul className="submenu"> */}

              {/* <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li> */}
              {/* </ul> */}
            </a>
          </li>

          <li>
            <a href="/">
              <span>Talabalar uchun</span>
              <ul className="submenu">
                <li>
                  <a href="https://student.nukusinnovatsion.uz/">
                    Hemis platformasi
                  </a>
                </li>
                {data?.map((page) => {
                  if (page.slug === "kutubxona") {
                    return (
                      <li key={page.id}>
                        <a href="library">{page.title.rendered}</a>
                      </li>
                    );
                  }
                })}

                {/* <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li> */}
              </ul>
            </a>
          </li>
        </div>
        <div>
          <li>
            <a href="contacts">
              <span>Kontaktlar</span>
              {/* <ul className="submenu">
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
              </ul> */}
            </a>
          </li>
          <li>
            <a href="news">
              <span>Yangiliklar</span>
              {/* <ul className="submenu">
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
                <li>
                  <a href="#">Talim dasturlari</a>
                </li>
              </ul> */}
            </a>
          </li>
          {/* <li className='last-item'>
                        <a href="#">
                            <span>Hamkorlik</span>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                                <li>
                                    <a href="#">Talim dasturlari</a>
                                </li>
                            </ul>
                        </a>
                    </li> */}
        </div>
      </ul>
    </div>
  );
};

export default HeaderMiddle;
