import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function About() {
	const path = process.env.PUBLIC_URL;
	const members = useSelector((state) => state.memberReducer.members);

	const [globals, setGlobals] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/global.json`).then((json) => {
			setGlobals(json.data.data);
		});
	}, []);

	return (
		<Layout
			name={'about'}
			subName1={'Members'}
			subName2={'Global'}
			subVisual={'figure1'}
			subTxt={
				'Vault presents a highly curated assortment of rare finds from Gucci’s past, each the one and only of its kind.'
			}>
			<div className='memberList'>
				<h1>MEMBERS</h1>
				<div className='wrap'>
					{members.map((member, idx) => {
						return (
							<article key={idx}>
								<div className='pic'>
									<img src={`${path}/img/${member.pic}`} />
								</div>
								<div className='txt'>
									<h2>{member.name}</h2>
									<h3>{member.position}</h3>
									<p>{member.description}</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>

			<div className='global'>
				<h1>GLOBAL</h1>
				<div className='wrap'>
					{globals.map((global, idx) => {
						return (
							<article key={idx}>
								<div className='wrap'>
									<h2>{global.location}</h2>
									<div className='txt'>
										<span>STORE</span>
										<h3>{global.store}</h3>
										<h4>{global.sub}</h4>
										<p>{global.description}</p>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default About;
