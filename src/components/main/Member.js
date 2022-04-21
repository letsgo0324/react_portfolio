import { useSelector } from 'react-redux';

function Member() {
	const path = process.env.PUBLIC_URL;
	const members = useSelector((state) => state.memberReducer.members);

	return (
		<section id='member'>
			<div className='inner'>
				<div className='wrap'>
					<article>
						<h1>OUR MEMBERS</h1>
					</article>
					<article>
						{members.map((member, idx) => {
							return (
								<div className='thumb'>
									<div className='pic'>
										<img key={idx} src={`${path}/img/${member.pic}`} />
									</div>
									<div className='txt'>
										<h2>{member.name}</h2>
										<h3>{member.position}</h3>
									</div>
								</div>
							);
						})}
					</article>
				</div>
			</div>
		</section>
	);
}

export default Member;
