import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function About() {
	const path = process.env.PUBLIC_URL;
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.data);
		});
	}, []);

	return (
		<Layout
			name={'about'}
			subName1={'Members'}
			subName2={'History'}
			subVisual={'figure1'}>
			<div className='memberList'>
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

			<div className='history'>
				<h1>HISTORY</h1>
				<div></div>
			</div>
		</Layout>
	);
}

export default About;
