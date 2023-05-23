import NestedMenuItem from '../NestedMenuItem'
import './HeaderBottom.scss'

type Props = {
    open: boolean
}


const HeaderBottom = ({ open }: Props) => {
    return (
        <div className={`header-bottom ${open ? 'open' : null}`}>
            <ul className="menu">
                <li>
                    <NestedMenuItem />
                </li>
                <li>
                    <NestedMenuItem />
                </li>
                <li>
                    <NestedMenuItem />
                </li>
                <li>
                    <NestedMenuItem />
                </li>
                <li>
                    <NestedMenuItem />
                </li>
                <li>
                    <NestedMenuItem />
                </li>
                <li>
                    <NestedMenuItem />
                </li>

            </ul>
        </div>
    )
}

export default HeaderBottom;