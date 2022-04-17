import React, { useEffect, useRef } from 'react';

function Layout(props) {
	const path = process.env.PUBLIC_URL;
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<div className='inner'>
					<h1>{props.name}</h1>
					<p>
						{props.subName1} | {props.subName2}
					</p>
				</div>
				<div className='pic'>
					<img src={`${path}/img/${props.subVisual}.png`} />
				</div>
			</figure>
			<div className='trans'>{props.children}</div>
		</section>
	);
}

export default Layout;
