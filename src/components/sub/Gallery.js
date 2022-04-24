import axios from 'axios';
import Masonry from 'react-masonry-component';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
//import { startAnimation } from 'framer-motion/types/animation/utils/transitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as types from '../../redux/actionType';

import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Gallery() {
	//======================================================shop
	const path = process.env.PUBLIC_URL;

	const [shopItems, setShopItems] = useState([]);
	const [shopIndex, setShopIndex] = useState(0);

	//로딩이미지
	const [loadingImg, setLoadingImg] = useState(true);

	//masonry
	const shopFrame = useRef(null);
	const input = useRef(null);
	const [enableClick, setEnableClick] = useState(true);
	const masonryOptions = { transitionDuration: '0.5s' };

	//팝업
	const shopPop = useRef(null);
	const [shopLoading, setShopLoading] = useState(false);

	const getShopFlickr = async (opt) => {
		const key = 'cfb398b73c61a4facf20c641274d8954';
		const method_people = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';
		const username = '195365059@N08';
		const shopNum = opt.count;
		let url = '';

		if (opt.type === 'people') {
			url = `https://www.flickr.com/services/rest/?method=${method_people}&api_key=${key}&per_page=${shopNum}&format=json&nojsoncallback=1&user_id=${username}`;
		}
		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${shopNum}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0) {
				alert('There are no images for this search');
				return;
			}
			setShopItems(json.data.photos.photo);
			setShopLoading(true);

			//	console.log(json.data);
		});

		setTimeout(() => {
			shopFrame.current.classList.add('on');
			setLoadingImg(false);

			setTimeout(() => {
				setEnableClick(true);
			}, 1000);
		}, 1000);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result || result === '') {
			alert('Please enter your search word');
			return;
		}

		if (enableClick) {
			setEnableClick(false);
			setLoadingImg(true);
			shopFrame.current.classList.remove('on');

			getShopFlickr({
				type: 'search',
				count: 30,
				tags: result,
			});
			input.current.value = '';
		}
	};

	useEffect(() => {
		getShopFlickr({
			type: 'people',
			count: 30,
		});
	}, []);

	//======================================================campaign
	const gallery = useSelector((state) => state.galleryReducer.gallery);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<Layout
				name={'gallery'}
				subName1={'Shop'}
				subName2={'Campaign'}
				subVisual={'figure3'}>
				{loadingImg ? (
					<img className='loadingImg' src={path + '/img/loading.gif'} />
				) : null}
				<div className='shop'>
					<h1>SHOP</h1>

					<div className='searchBox'>
						<div className='search'>
							<input
								type='text'
								placeholder='Search'
								ref={input}
								onKeyUp={(e) => {
									if (e.key === 'Enter') showSearch();
								}}
							/>
							<label className='hidden'>SEARCH</label>
							<button onClick={showSearch}>
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</button>
						</div>
						<button
							onClick={() => {
								if (enableClick) {
									setEnableClick(false);
									setShopLoading(true);
									shopFrame.current.classList.remove('on');

									getShopFlickr({
										type: 'people',
										count: 30,
									});
								}
							}}>
							SHOW SHOPPING
						</button>
					</div>

					<div className='wrap' ref={shopFrame}>
						<Masonry elementType={'div'} options={masonryOptions}>
							{shopItems.map((shopItem, idx) => {
								return (
									<article
										key={idx}
										onClick={() => {
											setShopIndex(idx);
											shopPop.current.open();
										}}>
										<div className='article_wrap'>
											<div className='pic'>
												<img
													src={`https://live.staticflickr.com/${shopItem.server}/${shopItem.id}_${shopItem.secret}_b.jpg`}
												/>
											</div>
											<h2>{shopItem.title}</h2>
										</div>
									</article>
								);
							})}
						</Masonry>
					</div>
				</div>

				<div className='campaign'>
					<h1>Campaign</h1>

					<div className='wrap'>
						{gallery.map((item, idx) => {
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
			</Layout>

			<Popup ref={shopPop}>
				{shopLoading && (
					<img
						src={`https://live.staticflickr.com/${shopItems[shopIndex].server}/${shopItems[shopIndex].id}_${shopItems[shopIndex].secret}_b.jpg`}
					/>
				)}
				<motion.span
					onClick={() => shopPop.current.close()}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}>
					CLOSE
				</motion.span>
			</Popup>

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

export default Gallery;
