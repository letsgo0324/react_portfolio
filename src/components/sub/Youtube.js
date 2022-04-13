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

	return (
		<>
			<Layout
				name={'youtube'}
				subName1={'Youtube'}
				subName2={'Metaverse'}
				subVisual={'figure4'}>
				<div className='youtubeList'>
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

				<div className='metaverse'>
					<h1>METAVERSE</h1>
					<div></div>
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
		</>
	);
}

export default Youtube;
