import Layout from '../common/Layout';

function Contact() {
	return (
		<Layout
			name={'contact'}
			subName1={'FAQs'}
			subName2={'Location'}
			subVisual={'figure5'}>
			<div className='faqs'></div>
			<div className='location'>
				<h1>LOCATION</h1>
				<div></div>
			</div>
		</Layout>
	);
}

export default Contact;
