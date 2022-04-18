import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Gallery() {
	const path = process.env.PUBLIC_URL;

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

	// ======================================= shop
	const shopNum = 30;
	const shop_photoset_id = '72177720298196000';
	const shopURL = `https://www.flickr.com/services/rest/?method=${method_album}&api_key=${key}&per_page=${shopNum}&format=json&nojsoncallback=1&user_id=${username}&photoset_id=${shop_photoset_id}`;

	const [shopItems, setShopItems] = useState([]);
	const frame2 = useRef(null);

	useEffect(() => {
		axios.get(shopURL).then((json) => {
			setShopItems(json.data.photoset.photo);
			//console.log(json);

			setTimeout(() => {
				frame2.current.classList.add('on');
				setLoading(false);
			}, 1000);
		});
	}, []);

	const [counter, setCounter] = useState(0);
	useEffect(() => {
		setCounter(counter + 1);
	}, []);

	return (
		<>
			<Layout
				name={'gallery'}
				subName1={'Campaign'}
				subName2={'Shop'}
				subVisual={'figure3'}>
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
										setOpen(true);
										setIndex(idx);
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

				<div className='shop'>
					<h1>SHOP</h1>
					<div className='wrap' ref={frame2}>
						{shopItems.map((shopItem, idx) => {
							return (
								<article key={idx}>
									<div className='article_wrap'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${shopItem.server}/${shopItem.id}_${shopItem.secret}_b.jpg`}
											/>
										</div>
										<h2>
											<span>00</span>
											{shopItem.title}
										</h2>
									</div>
								</article>
							);
						})}
					</div>
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
