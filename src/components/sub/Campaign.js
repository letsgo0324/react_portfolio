import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';
import { motion } from 'framer-motion';

function Campaign(props) {
	const path = process.env.PUBLIC_URL;

	const pop = useRef(null);
	const [load, setLoad] = useState(false);

	const key = 'cfb398b73c61a4facf20c641274d8954';
	const method_album = 'flickr.photosets.getPhotos';
	const num = 20;
	const username = '195365059@N08';
	const photoset_id = '72177720298076992';
	const url = `https://www.flickr.com/services/rest/?method=${method_album}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}&photoset_id=${photoset_id}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const frame = useRef(null);
	const [loading, setLoading] = useState(true);

	const getFlickr = async () => {
		await axios.get(url).then((json) => {
			setItems(json.data.photoset.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		getFlickr();
	}, []);

	return (
		<>
			<div className='campaign'>
				{loading ? (
					<img className='loading' src={path + '/img/loading.gif'} />
				) : null}
				<h1>CAMPAIGN</h1>

				<div className='wrap' ref={frame}>
					{items.map((item, idx) => {
						return (
							<article
								key={idx}
								onClick={() => {
									setIndex(idx);
									pop.current.open();
								}}>
								<span>GUCCI CAMPAIGN</span>
								<div className='pic'>
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
									/>
								</div>
								<h2>{item.title}</h2>
							</article>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Campaign;
