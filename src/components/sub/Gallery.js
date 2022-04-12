import Layout from '../common/Layout';

function Gallery() {
	return (
		<Layout
			name={'gallery'}
			subName1={'Gallery'}
			subName2={'Collaboration'}
			subVisual={'figure3'}>
			<div className='gallery'></div>
			<div className='collaboration'>
				<h1>COLLABORATION</h1>
				<div></div>
			</div>
		</Layout>
	);
}

export default Gallery;
