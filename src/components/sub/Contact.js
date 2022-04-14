import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../common/Layout';

function Contact() {
	const path = process.env.PUBLIC_URL;

	const container = useRef(null);
	const { kakao } = window;

	const info = [
		{
			title: 'SEOUL',
			latLng: new kakao.maps.LatLng(37.52508268355312, 127.04654346931945),
			imgSrc: `${path}/img/marker_img.png`,
			imgSize: new kakao.maps.Size(70, 70),
			imgPos: { offset: new kakao.maps.Point(35, 70) },
		},
		{
			title: 'INCHEON',
			latLng: new kakao.maps.LatLng(37.450283771081686, 126.45160385456757),
			imgSrc: `${path}/img/marker_img.png`,
			imgSize: new kakao.maps.Size(70, 70),
			imgPos: { offset: new kakao.maps.Point(35, 70) },
		},
		{
			title: 'BUSAN',
			latLng: new kakao.maps.LatLng(35.16868670638976, 129.12971375618278),
			imgSrc: `${path}/img/marker_img.png`,
			imgSize: new kakao.maps.Size(70, 70),
			imgPos: { offset: new kakao.maps.Point(35, 70) },
		},
	];

	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [index, setIndex] = useState(0);

	let [locations, setLocations] = useState([]);
	const [index2, setIndex2] = useState(0);

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

		const content = `<div class ="label"><p>GUCCI ${mapInfo[index].title}</p></div>`;
		const position = mapInfo[index].latLng;

		const customOverlay = new kakao.maps.CustomOverlay({
			position: position,
			content: content,
		});

		customOverlay.setMap(map);

		marker.setMap(map);
		setMap(map);

		window.addEventListener('resize', mapInit);
		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	useEffect(() => {
		axios.get(`${path}/DB/location.json`).then((json) => {
			setLocations(json.data.data);
			//console.log(json.data.data);
		});
	}, [index2]);

	return (
		<Layout
			name={'contact'}
			subName1={'Location'}
			subName2={'FAQs'}
			subVisual={'figure5'}>
			<div className='location'>
				<div className='map_contact'>
					{locations.map((location, idx) => {
						//console.log(locations);
						return (
							<div className='txt' key={idx}>
								<h2>{location.name}</h2>
								<span>{location.location}</span>
								<h3>ADDRESS</h3>
								<p>{location.address}</p>
								<h3>TEL</h3>
								<p>{location.call}</p>
								<h3>TIME</h3>
								<p>{location.time}</p>
								<h3>CATEGORY</h3>
								<p>{location.category}</p>
							</div>
						);
					})}
				</div>
				<div className='map_wrap'>
					<ul className='branch'>
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
			<div className='faqs'>
				<h1>FAQs</h1>
				<div></div>
			</div>
		</Layout>
	);
}

export default Contact;
