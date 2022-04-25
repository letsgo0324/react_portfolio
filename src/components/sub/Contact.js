import { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Contact() {
	const path = process.env.PUBLIC_URL;

	const container = useRef(null);
	const branch = useRef(null);

	const { kakao } = window;

	const info = [
		{
			title: 'SEOUL',
			name: 'Cheongdam Flagship',
			address: '462, Apgujeong-ro, Gangnam-gu, Seoul, Republic of Korea',
			call: '1577-1921',
			time: 'Mon-Sat(11am-8pm) / Sun(11am-7pm)',
			category:
				"Women's handbag, women's shoes, women's clothing, women's wallet & props, men's bag, men's shoes, men's clothing, men's wallet & props, jewelry, watch, DIY, home decoration",
			latLng: new kakao.maps.LatLng(37.52508268355312, 127.04654346931945),
			imgSrc: `${path}/img/marker_img.png`,
			imgSize: new kakao.maps.Size(70, 70),
			imgPos: { offset: new kakao.maps.Point(35, 70) },
		},
		{
			title: 'INCHEON',
			name: 'Shinsegae Duty Free Incheon Airport T1',
			address: '272, Gonghang-ro, Jung-gu, Incheon, Republic of Korea',
			call: '1577-0371',
			time: 'Everyday(6:30am-9:30pm)',
			category:
				"Women's handbag, women's shoes, women's wallet & props, men's bag, men's shoes, men's wallet & props, watch",
			latLng: new kakao.maps.LatLng(37.450283771081686, 126.45160385456757),
			imgSrc: `${path}/img/marker_img.png`,
			imgSize: new kakao.maps.Size(70, 70),
			imgPos: { offset: new kakao.maps.Point(35, 70) },
		},
		{
			title: 'BUSAN',
			name: 'Shinsegae Centum City',
			address: '35, Centum nam-daero, Haeundae-gu, Busan, Republic of Korea',
			call: '1577-1921',
			time: 'Mon-Thu(10:30am-8pm) / Fri-Sun(10:30am-8:30pm)',
			category:
				"Women's handbag, women's shoes, women's clothing, women's wallet & props, men's bag, men's shoes, men's clothing, men's wallet & props, jewelry, watch",
			latLng: new kakao.maps.LatLng(35.16868670638976, 129.12971375618278),
			imgSrc: `${path}/img/marker_img.png`,
			imgSize: new kakao.maps.Size(70, 70),
			imgPos: { offset: new kakao.maps.Point(35, 70) },
		},
	];

	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		container.current.innerHTML = '';

		const options = {
			center: mapInfo[index].latLng,
			level: 3,
		};

		const map = new kakao.maps.Map(container.current, options);

		const markerPosition = mapInfo[index].latLng;
		const imgSrc = mapInfo[index].imgSrc;
		const imgSize = mapInfo[index].imgSize;
		const imgPos = mapInfo[index].imgPos;
		const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});

		const mapInit = () => {
			map.setCenter(mapInfo[index].latLng);
		};

		const content = `
			<div class ="label">
				<h2>GUCCI ${mapInfo[index].name}</h2>
				<p>${mapInfo[index].address}</p>
			</div>
		`;
		const position = mapInfo[index].latLng;

		const customOverlay = new kakao.maps.CustomOverlay({
			position: position,
			content: content,
		});

		const lis = branch.current.querySelectorAll('li');
		for (const li of lis) li.classList.remove('on');
		lis[index].classList.add('on');

		customOverlay.setMap(map);
		marker.setMap(map);
		setMap(map);

		window.addEventListener('resize', mapInit);
		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	const faqArr = [
		{
			month: '04',
			date: '05',
			title: 'What is Vault?',
			category: 'About Vault',
			description:
				'Welcome to Vault, the online concept store created by Gucci from the vision of Creative Director Alessandro Michele. The name evokes an air of magic, denoting the presence of precious objects that represent a love for beauty, dreams, passion, the search for ideas that go beyond the confines of time and space; a testament to the belief that past, present and future can co-exist through the power of the imagination.',
		},
		{
			month: '03',
			date: '18',
			title: 'How are products selected for Vault?',
			category: 'Gucci Vintage Items',
			description:
				'Every vintage Vault item has been selected by the Creative Director and Gucci archivists for its particularity and character, and then reconditioned by in-house artisans. Because of their exclusivity, vintage items are one-of-a-kind, only available once and numbered to coincide with the year of the drop—a detail that further emphasizes their very limited availability.',
		},
		{
			month: '02',
			date: '27',
			title: 'What other designers and brands can I find on Vault?',
			category: 'Curated Brand Selection',
			description:
				'An ever-evolving space, Vault encompasses many different forms of collaboration, resulting in an offering that goes increasingly beyond the traditional. Inspired by the magnificent, multimedia concept stores from the ‘90s, Vault is a repository that sells creations from handpicked designers and exclusive capsule collections or curated selections from noteworthy brands dear to Alessandro Michele. The unique mix of pieces drop regularly on the site, creating an ever-expanding universe.',
		},
		{
			month: '01',
			date: '30',
			title: 'What is the short explanation of NFTs?',
			category: 'Metaverse and NFT',
			description:
				'NFT stands for non-fungible token. Each token represents rights to a unique digital asset or collectible such as an avatar, wearable, skin or piece of digital art. You need a digital wallet and cryptocurrency.',
		},
	];

	const [faqCon, setFaqCon] = useState(faqArr);

	return (
		<Layout
			name={'contact'}
			subName1={'Location'}
			subName2={'FAQs'}
			subVisual={'figure5'}
			subTxt={
				'Matching the one-of a-kind status of the vintage selection, each product comes in tailor-made packaging specially created to reflect their design.'
			}>
			<div className='location'>
				<h1>LOCATION</h1>
				<div className='location_wrap'>
					<ul className='map_contact' ref={branch}>
						{mapInfo.map((info, idx) => {
							return (
								<li className='txt' key={idx}>
									<h2>{info.name}</h2>
									<span>{info.title}</span>
									<h3>ADDRESS</h3>
									<p>{info.address}</p>
									<h3>TEL</h3>
									<p>{info.call}</p>
									<h3>TIME</h3>
									<p>{info.time}</p>
									<h3>CATEGORY</h3>
									<p>{info.category}</p>
								</li>
							);
						})}
					</ul>
					<div className='map_wrap'>
						<ul className='branch' ref={branch}>
							{mapInfo.map((info, idx) => {
								return (
									<li
										key={idx}
										onClick={() => {
											setIndex(idx);
										}}>
										{info.title}
									</li>
								);
							})}
						</ul>
						<div id='map' ref={container}></div>
					</div>
				</div>
			</div>
			<div className='faqs'>
				<h1>FAQs</h1>
				<div className='wrap'>
					{faqCon.map((con, idx) => {
						return (
							<article>
								<h2>{con.category}</h2>
								<span>{con.month}</span>
								<span>{con.date}</span>
								<h3>{con.title}</h3>
								<p>{con.description}</p>
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Contact;
