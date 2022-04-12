import Layout from '../common/Layout';

function Community() {
	return (
		<Layout
			name={'community'}
			subName1={'News'}
			subName2={'Shop'}
			subVisual={'figure2'}>
			<div className='news'></div>
			<div className='shop'>
				<h1>SHOP</h1>
				<div></div>
			</div>
		</Layout>
	);
}

export default Community;
