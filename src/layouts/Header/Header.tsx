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
                    <img src="https://nukusinnovatsion.uz/wp-content/uploads/2023/02/cropped-IMG_20230209_063639_756-1-60x60.png" alt="logo" />
                </div>
        </header>
    )
}

export default Header;