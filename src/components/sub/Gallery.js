import axios from 'axios';
import { useEffect, useState } from 'react';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Gallery() {
	const key = 'cfb398b73c61a4facf20c641274d8954';
	const method_album = 'flickr.photosets.getPhotos';
	const num = 20;
	const username = '195365059@N08';
	const photoset_id = '72177720298076992';
	const url = `https://www.flickr.com/services/rest/?method=${method_album}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}&photoset_id=${photoset_id}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.photoset.photo);
			//console.log(json);
		});
	}, []);

	return (
		<>
			<Layout
				name={'gallery'}
				subName1={'Campaign'}
				subName2={'Shop'}
				subVisual={'figure3'}>
				<div className='campaign'>
					<div className='wrap_campaign'>
						{items.map((item, idx) => {
							return (
								<article
									key={idx}
									onClick={() => {
										setOpen(true);
										setIndex(idx);
									}}>
									<span>GUCCI CAMPAIGN</span>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
									</div>
									<h2>{item.title}</h2>
								</article>
							);
						})}
					</div>
				</div>

				<div className='shop'>
					<h1>SHOP</h1>
					<div></div>
				</div>
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				</Popup>
			) : null}
		</>
	);
}

export default Gallery;
