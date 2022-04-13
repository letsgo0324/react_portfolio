import Layout from '../common/Layout';

function Community() {
	return (
		<Layout
			name={'community'}
			subName1={'News'}
			subName2={'Collaboration'}
			subVisual={'figure2'}>
			<div className='news'></div>
			<div className='collaboration'>
				<h1>COLLABORATION</h1>
				<div></div>
			</div>
		</Layout>
	);
}

export default Community;
