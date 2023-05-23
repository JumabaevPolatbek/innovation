import NestedMobileMenuItem from '../NestedMobileMenuItem'
import './MobileMenu.scss'

type Props = {
    open: boolean
}


const MobileMenu = ({ open }: Props) => {

    return (
        <div className={`box ${open ? 'open' : null}`} >
            <div className="cont">
                <div className="header">
                    <img src="https://tsul.uz/front_assets/assets/img/logo_university/_Sign logo_EN_primary.png" alt="logo" className="logo-mobile" />
                    <a href="#">+998 99 123 45 67</a>
                </div>
                <div className={`mobile-menu`}>
                    <ul className="menu">
                        <li>
                            <NestedMobileMenuItem />
                        </li>

                        <li>
                            <NestedMobileMenuItem />
                        </li>

                        <li>
                            <NestedMobileMenuItem />
                        </li>

                        <li>
                            <NestedMobileMenuItem />
                        </li>

                        <li>
                            <NestedMobileMenuItem />
                        </li>

                        <li>
                            <NestedMobileMenuItem />
                        </li>

                        <li>
                            <NestedMobileMenuItem />
                        </li>

                    </ul>
                </div>
                <div className="footer">
                    <ul className="social__links">
                        <li>
                            <a href='#'><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                            <a href="#"><span className="icon-telegram"></span></a>
                        </li>
                        <li>
                            <a href='#'><span className="icon-youtube-play"></span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className="icon-instagram"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span className="icon-facebook"></span></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default MobileMenu;