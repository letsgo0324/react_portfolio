function Visual() {
	const path = process.env.PUBLIC_URL;

	return (
		<figure id='visual' className='myScroll'>
			<img src={`${path}/img/visual_vid_img.jpg`} />
			<video src={`${path}/img/visual_vid.mp4`} autoPlay loop muted></video>
			<div className='inner'>
				<h1>Enter Vault</h1>
				<p>
					The experimental space evolves, transcending boundaries like never
					before.
				</p>
				<span>VIEW →</span>
			</div>
		</figure>
	);
}

export default Visual;
