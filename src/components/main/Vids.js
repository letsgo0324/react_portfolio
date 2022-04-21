import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Popup from '../common/Popup';

function Vids() {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const popVid = useRef(null);
	const [indexVid, setIndexVid] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
				<div className='inner'>
					<div className='tit'>
						<h1>RECENT YOUTUBE</h1>
						<p>
							In Depth : Alessandro Michele on GUCCI beloved bags
							<br />
							Recorded on video, a special episode of the Gucci Podcast features
							Creative Director Alessandro Michele on a journey through the
							history and inspiration of the Gucci Beloved bags including the
							new Bamboo 1947 line.
							<br />
							Starting from the birth of bags as a historical object of social
							value, the conversation spans centuries and eras, up to the most
							recent meanings, associated with the life of Alessandro Michele
							who, through anecdotes and personal stories, tells the fundamental
							role of these objects not only during his childhood but also in
							his everyday life as a Creative Director.
						</p>
					</div>

					<div className='wrap'>
						{vidData.map((vid, idx) => {
							const tit = vid.snippet.title;

							if (idx < 3)
								return (
									<article
										key={idx}
										onClick={() => {
											setIndexVid(idx);
											popVid.current.open();
										}}>
										<div className='pic'>
											<img src={vid.snippet.thumbnails.high.url} />
										</div>

										<h2>
											{tit.length > 25 ? tit.substr(0, 25) + '..' : tit}
											<span>VIEW MORE</span>
										</h2>
									</article>
								);
						})}
					</div>
				</div>
			</section>

			<Popup ref={popVid}>
				{vidData.length !== 0 && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							vidData[indexVid].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<motion.span
					onClick={() => popVid.current.close()}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}>
					CLOSE
				</motion.span>
			</Popup>
		</>
	);
}

export default Vids;
