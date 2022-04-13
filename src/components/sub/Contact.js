import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../common/Layout';

function Contact() {
	const container = useRef(null);
	const { kakao } = window;
	const [map, setMap] = useState(null);

	const path = process.env.PUBLIC_URL;
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		const options = {
			center: new kakao.maps.LatLng(37.52508268355312, 127.04654346931945),
			level: 3,
		};
		const map = new kakao.maps.Map(container.current, options);
		setMap(map);
	}, []);

	useEffect(() => {
		axios.get(`${path}/DB/location.json`).then((json) => {
			setLocations(json.data.data);
			//console.log(json.data.data[0]);
		});
	}, []);

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
					<ul>
						<li onClick={() => locations[0]}>SEOUL</li>
						<li onClick={() => locations[1]}>INCHEON</li>
						<li onClick={() => locations[2]}>BUSAN</li>
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
