import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Banner() {
	const path = process.env.PUBLIC_URL;

	return (
		<section id='banner' className='myScroll'>
			<div className='inner'>
				<Swiper
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}>
					<SwiperSlide>
						<div className='con_banner'>
							<article>
								<h1>SUPERPLASTIC</h1>
								<h2>SUPERPLASTIC and Gucci present SUPERGUCCI</h2>
								<p>
									From floral fantasies to trippy GG Supreme dreamscapes, the
									characters of SUPERPLASTIC enter new realms as the leading
									creator of animated celebrities, vinyl and digital
									collectibles teams up with Gucci to create the new SUPERGUCCI
									collaboration.
									<br />
									For the three-part series of NFTs each with their own
									handcrafted porcelain sculpture, SUPERPLASTIC’s synthetic
									artists Janky and Guggimon combine their digital style with
									the House’s historic codes. In the first release, the famous
									SuperJanky figure finds itself within ten different whimsical
									scenarios inspired by Gucci Aria.
									<br />
									This first collection of ten NFTs dropping on February 1st
									will be available on SUPERPLASTIC via Gucci Vault, the House’s
									platform for objects that defy the confines of time and space
									through the power of imagination.
								</p>
								<button>more</button>
							</article>
							<div className='pic'>
								<img src={`${path}/img/main_banner1.jpg`} />
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='inner'>
							<div className='con_banner'>
								<article>
									<h1>#GENERATIONEQUALITY</h1>
									<h2>A special digital CHIME Zine dedicated.</h2>
									<p>
										During the occasion of the Generation Equality Forum in
										Paris, which took place from June 30 to July 2, 2021, CHIME
										FOR CHANGE presented a special digital edition of the CHIME
										Zine, dedicated to the voices of youth activists and
										organizers of the Forum.
										<br />
										The youth leaders of the Forum together are challenging
										power structures and driving urgent action to resolve the
										world’s most pressing issues with an intersectional feminist
										perspective.United in this special digital edition of the
										Zine, the youth voices from countries around the world –
										including Argentina, Australia, Brazil, Democratic Republic
										of the Congo, Guatemala, Kenya, Turkey, Tunisia, the United
										States and Zimbabwe – call for global attention on issues
										facing young feminists today, and to advance innovative,
										transformative solutions to realize a gender-equal future.
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
