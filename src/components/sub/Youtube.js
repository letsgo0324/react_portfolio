import axios from 'axios';
import { useEffect, useState } from 'react';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Youtube() {
	const key = 'AIzaSyDXkbK7JOz1GmisiXd0C5iKd_FmEK3uk3o';
	const num = 4;
	const id = 'PL5cy3lFO3TzpUZIkUQrOcq0xHngdcMJxO';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.items);
		});
	}, []);

	const num2 = 4;
	const id2 = 'PL5cy3lFO3Tzo5tZ8n_R7SNNvM6kxv4Xaf';
	const url2 = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num2}&playlistId=${id2}`;

	const [items2, setItems2] = useState([]);
	const [open2, setOpen2] = useState(false);
	const [index2, setIndex2] = useState(0);

	useEffect(() => {
		axios.get(url2).then((json) => {
			setItems2(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout
				name={'youtube'}
				subName1={'Video'}
				subName2={'Collaboration'}
				subVisual={'figure4'}>
				<div className='video'>
					<div className='videoList'>
						<h1>VIDEO</h1>
						<div className='wrap'>
							{items2.map((item, idx) => {
								const tit = item.snippet.title;
								const desc = item.snippet.description;
								const date = item.snippet.publishedAt;
								const clickBtn = () => {
									setOpen2(true);
									setIndex2(idx);
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
							setOpen(true);
							setIndex(idx);
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

			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				</Popup>
			) : null}

			{open2 ? (
				<aside className='pop2'>
					<span onClick={() => setOpen2(false)}>CLOSE</span>
					<div className='pop_con'>
						<iframe
							src={
								'https://www.youtube.com/embed/' +
								items2[index2].snippet.resourceId.videoId
							}
							frameBorder='0'></iframe>
					</div>
				</aside>
			) : null}
		</>
	);
}

export default Youtube;
