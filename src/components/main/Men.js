function Men(props) {
	const path = process.env.PUBLIC_URL;
	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = 100;
	const position = scrolled - start + base;

	return (
		<section id='men' className='myScroll'>
			<div className='inner'>
				<div className='wrap_men'>
					<h1
						style={
							position >= 0
								? { transform: `translateY(-${position / 2}px)` }
								: null
						}>
						MEN
					</h1>
					<h2
						style={
							position >= 0
								? { transform: `translateX(${position / 2}px)` }
								: null
						}>
						QUALITY
					</h2>
					<article
						style={
							position >= 0
								? { transform: `translateX(-${position / 2}px)` }
								: null
						}>
						<div className='pic'>
							<img src={`${path}/img/main_men1.jpg`} />
						</div>
						<div className='txt'>
							<h2>03</h2>
							<p>Silk tie</p>
						</div>
					</article>
					<article
						style={
							position >= 0
								? { transform: `translateX(${position * 1.5}px)` }
								: null
						}>
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
