function Banner() {
	const path = process.env.PUBLIC_URL;

	return (
		<section id='banner' className='myScroll'>
			<div className='inner'>
				<div className='wrap_banner'>
					<article>
						<h1>SUPERPLASTIC</h1>
						<h2>SUPERPLASTIC and Gucci present SUPERGUCCI</h2>
						<p>
							From floral fantasies to trippy GG Supreme dreamscapes, the
							characters of SUPERPLASTIC enter new realms as the leading creator
							of animated celebrities, vinyl and digital collectibles teams up
							with Gucci to create the new SUPERGUCCI collaboration.
							<br />
							For the three-part series of NFTs each with their own handcrafted
							porcelain sculpture, SUPERPLASTIC’s synthetic artists Janky and
							Guggimon combine their digital style with the House’s historic
							codes. In the first release, the famous SuperJanky figure finds
							itself within ten different whimsical scenarios inspired by Gucci
							Aria.
							<br />
							This first collection of ten NFTs dropping on February 1st will be
							available on SUPERPLASTIC via Gucci Vault, the House’s platform
							for objects that defy the confines of time and space through the
							power of imagination.
						</p>
						<button>more</button>
					</article>
					<div className='pic'>
						<img src={`${path}/img/main_banner1.jpg`} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
