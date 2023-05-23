import { useState } from 'react';
import './NestedMobileMenuItem.scss';

const NestedMobileMenuItem = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className='mobile-menu-item' id={`${open ? 'open': null}`}>
            <span onClick={() => setOpen(!open)}>Universitet</span>
            <div className={`submenu-container ${open ? 'open-sb': null}`}>
                <div className="menu-feature">
                    <p className="menu__title">Universitet</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-feature">
                    <p className="menu__title">Rasmiy hujjatlar</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Lokal hujjatlar</a>
                        </li>
                        <li>
                            <a href="#">Korrupciyaga qarshi kurashish</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-feature">
                    <p className="menu__title">Yutuqlar</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Raqamlar va malumotlar</a>
                        </li>
                        <li>
                            <a href="#">Reytingdagi o'rinlar</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-feature">
                    <p className="menu__title">Tarkibiy tuzilma</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Lokal hujjatlar</a>
                        </li>
                        <li>
                            <a href="#">Korrupciyaga qarshi kurashish</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-feature">
                    <p className="menu__title">Murojaatlar</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Raqamlar va malumotlar</a>
                        </li>
                        <li>
                            <a href="#">Reytingdagi o'rinlar</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-feature">
                    <p className="menu__title">Xaridlar</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                    </ul>
                </div>

                <div className="menu-feature">
                    <p className="menu__title">Yutuqlar</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Raqamlar va malumotlar</a>
                        </li>
                        <li>
                            <a href="#">Reytingdagi o'rinlar</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-feature">
                    <p className="menu__title">Tarkibiy tuzilma</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Universitetning ustuvor yo'nalishi</a>
                        </li>
                        <li>
                            <a href="#">Lokal hujjatlar</a>
                        </li>
                        <li>
                            <a href="#">Korrupciyaga qarshi kurashish</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-feature">
                    <p className="menu__title">Murojaatlar</p>
                    <ul className="ssubmenu">
                        <li>
                            <a href="#">Raqamlar va malumotlar</a>
                        </li>
                        <li>
                            <a href="#">Reytingdagi o'rinlar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NestedMobileMenuItem;