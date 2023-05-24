import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../HeaderBottom';
import './HeaderMiddle.scss';
import { useGetPagesQuery } from '../../store/reducer/postSlice';

const HeaderMiddle = () => {
	const { data } = useGetPagesQuery();
	const [openMenu, setOpenMenu] = useState(true);

	return (
		<div className='header-middle'>
			{/* <button className="header-bottom-btn" onClick={() => setOpenMenu(!openMenu)}>
                <span className="icon-grid"></span>
            </button>
            <HeaderBottom open={openMenu} />
             */}
			<ul className='menu'>
				<div>
					<li className='first-item'>
						<a href='/'>
							<span>Institut haqida</span>
							<ul className='submenu'>
								{data?.map((pages) => {
									if (
										pages.slug ===
											'rahbariyat' ||
										pages.slug ===
											'tuzilma'
									) {
										return (
											<li
												key={
													pages.id
												}
											>
												<Link
													to={
														pages.slug ===
														'rahbariyat'
															? 'management'
															: 'structure'
													}
												>
													{
														pages
															.title
															.rendered
													}
												</Link>
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
						<Link to='faculties'>
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
						</Link>
					</li>

					<li>
						<Link to='/'>
							<span>Talabalar uchun</span>
							<ul className='submenu'>
								<li>
									<Link to='https://student.nukusinnovatsion.uz/'>
										Hemis platformasi
									</Link>
								</li>
								{data?.map((page) => {
									if (
										page.slug ===
										'kutubxona'
									) {
										return (
											<li
												key={
													page.id
												}
											>
												<Link to='library'>
													{
														page
															.title
															.rendered
													}
												</Link>
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
						</Link>
					</li>
				</div>
				<div>
					<li>
						<Link to='contacts'>
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
						</Link>
					</li>
					<li>
						<Link to='news'>
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
						</Link>
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
