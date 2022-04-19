function Men() {
	const path = process.env.PUBLIC_URL;

	return (
		<section id='men' className='myScroll'>
			<div className='inner'>
				<div className='wrap_men'>
					<h1>MEN</h1>
					<article>
						<div className='pic'>
							<img src={`${path}/img/main_men1.jpg`} />
						</div>
						<div className='txt'>
							<h2>03</h2>
							<p>Silk tie</p>
						</div>
					</article>
					<article>
						<div className='pic'>
							<img src={`${path}/img/main_men2.jpg`} />
						</div>
						<div className='txt'>
							<h2>04</h2>
							<p>Marcel hoody</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Men;
