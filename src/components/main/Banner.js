import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Banner() {
	const path = process.env.PUBLIC_URL;

	return (
		<section id='banner' className='myScroll'>
			<div className='wrap_banner'>
				<Swiper
					slidesPerView={1}
					loop={true}
					// autoplay={{
					// 	delay: 2500,
					// 	disableOnInteraction: false,
					// }}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}>
					<SwiperSlide>
						<div className='inner'>
							<div className='con_banner'>
								<article>
									<h1>SUPERPLASTIC</h1>
									<h2>SUPERPLASTIC and Gucci present SUPERGUCCI</h2>
									<p>
										From floral fantasies to trippy GG Supreme dreamscapes, the
										characters of SUPERPLASTIC enter new realms as the leading
										creator of animated celebrities, vinyl and digital
										collectibles teams up with Gucci to create the new
										SUPERGUCCI collaboration.
										<br />
										For the three-part series of NFTs each with their own
										handcrafted porcelain sculpture, SUPERPLASTIC’s synthetic
										artists Janky and Guggimon combine their digital style with
										the House’s historic codes. In the first release, the famous
										SuperJanky figure finds itself within ten different
										whimsical scenarios inspired by Gucci Aria.
										<br />
										This first collection of ten NFTs dropping on February 1st
										will be available on SUPERPLASTIC via Gucci Vault, the
										House’s platform for objects that defy the confines of time
										and space through the power of imagination.
									</p>
									<button>more</button>
								</article>
								<div className='pic'>
									<img src={`${path}/img/main_banner1.jpg`} />
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='inner'>
							<div className='con_banner'>
								<article>
									<h1>10KTF Gucci Grail</h1>
									<h2>When Alessandro Michele crosses paths.</h2>
									<p>
										A crystal ball heralds its arrival—a glimpse into the future
										of what self-expression could be, called 10KTF Gucci Grail.
										<br />
										This new chapter for the House begins as Creative Director
										Alessandro Michele continues his journey towards new
										paradigms that go beyond time and space. To push the
										narrative forward, he takes on a digital form of himself to
										travel from Rome to New Tokyo, a floating city in a parallel
										universe. Within this metaverse metropolis, he meets with
										the famed digital artisan Wagmi-san, legendary for crafting
										coveted items in his 10KTF Shop for Apes, Cats, Wizards,
										Toadz and more PFPs (the profile pics, but more importantly
										the means of expression in the metaverse).
									</p>
									<button>more</button>
								</article>
								<div className='pic'>
									<img src={`${path}/img/main_banner2.jpg`} />
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

export default Banner;
