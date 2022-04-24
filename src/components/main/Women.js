function Women(props) {
	const path = process.env.PUBLIC_URL;
	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = -100;
	const position = scrolled - start + base;

	return (
		<section id='women' className='myScroll'>
			<div className='inner'>
				<div className='wrap_women'>
					<h1
						style={
							position >= 0
								? { transform: `translateY(-${position / 2}px)` }
								: null
						}>
						WOMEN
					</h1>
					<article
						style={
							position >= 0 ? { transform: `translateX(-${position}px)` } : null
						}>
						<div className='pic'>
							<img src={`${path}/img/main_women1.jpg`} />
						</div>
						<div className='txt'>
							<h2>01</h2>
							<p>Shagadelic belt</p>
						</div>
					</article>
					<article
						style={
							position >= 0
								? { transform: `translateX(${position / 2}px)` }
								: null
						}>
						<div className='pic'>
							<img src={`${path}/img/main_women2.jpg`} />
						</div>
						<div className='txt'>
							<h2>02</h2>
							<p>Vintage sweater vest</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Women;
