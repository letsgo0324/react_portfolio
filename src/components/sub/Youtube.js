import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyDXkbK7JOz1GmisiXd0C5iKd_FmEK3uk3o';
		const num = 4;
		const id = 'PL5cy3lFO3TzpUZIkUQrOcq0xHngdcMJxO';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;

		axios.get(url).then((json) => {
			setItems(json.data.items);
		});
	}, []);

	return (
		<Layout
			name={'youtube'}
			subName1={'Youtube'}
			subName2={'Metaverse'}
			subVisual={'figure4'}>
			<div className='youtubeList'>
				{items.map((item, idx) => {
					const desc = item.snippet.description;
					const date = item.snippet.publishedAt;

					return (
						<article key={idx}>
							<div className='pic'>
								<img src={item.snippet.thumbnails.standard.url} />
							</div>
							<div className='txt'>
								<span>{date.split('T')[0]}</span>
								<h2>{item.snippet.title}</h2>
								<p>{desc.length > 200 ? desc.substr(0, 200) + '..' : desc}</p>
								<a href='#'>VIEW MORE</a>
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
	);
}

export default Youtube;
