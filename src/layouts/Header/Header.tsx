import HeaderBottom from "../../components/HeaderBottom";
import HeaderMiddle from "../../components/HeaderMiddle";
import HeaderTop from "../../components/HeaderTop";
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
                <HeaderTop />
                <HeaderMiddle />
                <div className="logo">
                    <img src="/images/NII.png" alt="logo" />
                </div>
        </header>
    )
}

export default Header;