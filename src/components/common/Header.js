import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = { color: '#6fd885' };

	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/'>
						<img src={`${props.path}/img/logo.png`} />
					</NavLink>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink to='/about' activeStyle={active}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact' activeStyle={active}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to='/join' activeStyle={active}>
							Join
						</NavLink>
					</li>
				</ul>

				<FontAwesomeIcon icon={faBars} />
			</div>
		</header>
	);
}

export default Header;
