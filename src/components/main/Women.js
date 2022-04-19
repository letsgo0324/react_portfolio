function Women() {
	const path = process.env.PUBLIC_URL;

	return (
		<section id='women' className='myScroll'>
			<div className='inner'>
				<div className='wrap_women'>
					<h1>WOMEN</h1>
					<article>
						<div className='pic'>
							<img src={`${path}/img/main_women1.jpg`} />
						</div>
						<div className='txt'>
							<h2>01</h2>
							<p>Shagadelic belt</p>
						</div>
					</article>
					<article>
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
