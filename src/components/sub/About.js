import React from 'react';
const path = process.env.PUBLIC_URL;

function About() {
	return (
		<section className='content about'>
			<figure>
				<div className='inner'>
					<h1>ABOUT</h1>
					<p>History | Members</p>
				</div>
				<div className='pic'>
					<img src={`${path}/img/figure1.png`} />
				</div>
			</figure>
			<div className='inner'>
				<h1>HISTORY</h1>
			</div>
		</section>
	);
}

export default About;
