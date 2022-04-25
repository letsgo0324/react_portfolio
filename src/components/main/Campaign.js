import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Popup from '../common/Popup';

function Campaign() {
	const gallery = useSelector((state) => state.galleryReducer.gallery);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='campaign' className='myScroll'>
				<div className='campaign_outline'>
					<div className='campaign_inner'>
						<div className='campaign_wrap'>
							<div className='campaign_tit'>
								<h1>RECENT CAMPAIGN</h1>
							</div>
							{gallery.map((item, idx) => {
								if (idx < 4) {
									return (
										<article
											key={idx}
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											<div className='pic'>
												<img
													src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
												/>
											</div>
											<div className='txt'>
												<div className='txt_inner'>
													<h2>{idx + 1}</h2>
													<h3>{item.title}</h3>
													<span>VIEW</span>
												</div>
											</div>
										</article>
									);
								}
							})}
						</div>
					</div>
				</div>
			</section>

			<Popup ref={pop}>
				{gallery.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${gallery[index].server}/${gallery[index].id}_${gallery[index].secret}_b.jpg`}
					/>
				)}
				<motion.span
					onClick={() => pop.current.close()}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}>
					CLOSE
				</motion.span>
			</Popup>
		</>
	);
}

export default Campaign;
