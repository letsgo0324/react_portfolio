import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Youtube() {
	//==============================================video
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const popVid = useRef(null);
	const [indexVid, setIndexVid] = useState(0);

	//================================================collaboration
	const key = 'AIzaSyDXkbK7JOz1GmisiXd0C5iKd_FmEK3uk3o';
	const num = 4;
	const id = 'PL5cy3lFO3TzpUZIkUQrOcq0xHngdcMJxO';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	const pop = useRef(null);
	const [items, setItems] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.items);
			setLoading(true);
		});
	}, []);

	return (
		<>
			<Layout
				name={'youtube'}
				subName1={'Video'}
				subName2={'Collaboration'}
				subVisual={'figure4'}
				subTxt={
					'Each vintage item is one-of-a-kind, only available once and numbered to coincide with the year of the drop—a detail that further emphasizes their very limited availability.'
				}>
				<div className='video'>
					<div className='videoList'>
						<h1>VIDEO</h1>
						<div className='wrap'>
							{vidData.map((item, idx) => {
								const tit = item.snippet.title;
								const desc = item.snippet.description;
								const date = item.snippet.publishedAt;
								const clickBtn = () => {
									setIndexVid(idx);
									popVid.current.open();
								};

								return (
									<article key={idx} onClick={clickBtn}>
										<div className='txt'>
											<h2>{idx + 1}</h2>

											<h3>
												{tit.length > 30 ? tit.substr(0, 30) + '..' : tit}
											</h3>
											<p>
												{desc.length > 100 ? desc.substr(0, 100) + '..' : desc}
											</p>
										</div>
										<div className='pic'>
											<img src={item.snippet.thumbnails.standard.url} />
										</div>
										<span>{date.split('T')[0]}</span>
									</article>
								);
							})}
						</div>
					</div>
				</div>
				<div className='collaboList'>
					<h1>COLLABORATION</h1>
					{items.map((item, idx) => {
						const desc = item.snippet.description;
						const date = item.snippet.publishedAt;
						const clickBtn = () => {
							setIndex(idx);
							pop.current.open();
						};

						return (
							<article key={idx}>
								<div className='pic' onClick={clickBtn}>
									<img src={item.snippet.thumbnails.standard.url} />
								</div>
								<div className='txt'>
									<h2>{date.split('T')[0]}</h2>
									<h3>{item.snippet.title}</h3>
									<p>{desc.length > 200 ? desc.substr(0, 200) + '..' : desc}</p>
									<span className='view' onClick={clickBtn}>
										VIEW MORE
									</span>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>

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

			<Popup ref={pop}>
				{loading && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
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

export default Youtube;
