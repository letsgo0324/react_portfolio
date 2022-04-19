function Stories() {
	const path = process.env.PUBLIC_URL;

	return (
		<section id='stories' className='myScroll'>
			<div className='inner'>
				<h1>STORIES</h1>
				<div className='wrap'>
					<div className='wrap_stories'>
						<div className='txt'>
							<h2>PEOPLE & EVENTS</h2>
						</div>
						<div className='pic'>
							<img src={`${path}/img/main_stories.jpg`} />
						</div>
					</div>
					<article>
						<h2>INTRODUCING GUCCI GAOK</h2>
					</article>
					<article>
						<h3>
							Taking its name from the Korean world ‘gaok', meaning ‘traditional
							home’, the House’s second flagship store in Seoul is based in the
							vibrant and eclectic Itaewon neighborhood.
						</h3>
					</article>
					<article>
						<p>
							As part of a special digital event to inaugurate the GUCCI GAOK
							flagship store in Seoul, KAI—Brand ambassador of Gucci
							Korea—alongside Cha Seung-won, Lee Ji-ah, Han Jee-min, Jay Park
							and Sunmi take you on a tour of the new space whose design
							reflects the creative, hectic and innovative spirit of the Itaewon
							district where it is located, combining a vibrant “pop” soul with
							elegant and contemporary eclecticism.
						</p>
					</article>
					<article>
						<p>
							Gucci Brand Ambassador and South Korean singer-songwriter and
							actress IU showcases the House’s selection of gift ideas for the
							holiday season in a colorful series of images set against the
							backdrop of a fairytale-like landscape.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Stories;
