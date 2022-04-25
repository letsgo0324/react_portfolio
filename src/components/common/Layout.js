import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Layout(props) {
	const path = process.env.PUBLIC_URL;
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	const [moveToTop, setMoveToTop] = useState(0);

	const handleTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setMoveToTop(0);
	};

	return (
		<>
			<section className={`content ${props.name}`} ref={frame}>
				<figure>
					<div className='inner'>
						<div className='tit'>
							<h1>{props.name}</h1>
							<p>
								{props.subName1} | {props.subName2}
							</p>
						</div>

						<div className='pic'>
							<h2>{props.subTxt}</h2>
							<img src={`${path}/img/${props.subVisual}.png`} />
						</div>
					</div>
				</figure>
				<div className='inner'>{props.children}</div>
			</section>

			<button className='btnMove' onClick={handleTop}>
				<FontAwesomeIcon icon={faAngleUp} />
			</button>
		</>
	);
}

export default Layout;
