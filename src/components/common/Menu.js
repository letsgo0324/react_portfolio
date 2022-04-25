import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Menu = forwardRef((props, ref) => {
	const active = { color: '#6fd885' };
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.nav
						initial={{
							x: 280,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
							transition: {
								duration: 0.5,
								type: 'spring',
								bounce: 0,
							},
						}}
						exit={{ x: 280, opacity: 0 }}>
						<div className='nav_wrap'>
							<span>
								<FontAwesomeIcon
									icon={faXmark}
									onClick={() => setOpen(false)}
								/>
							</span>

							<h1>
								<NavLink exact to='/' activeStyle={active}>
									<img src={props.logoSrc} />
								</NavLink>
							</h1>

							<ul
								id='gnb'
								onClick={() => {
									setOpen(false);
									props.setOpened(!props.opened);
								}}>
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
						</div>
					</motion.nav>
				</>
			)}
		</AnimatePresence>
	);
});

export default Menu;
