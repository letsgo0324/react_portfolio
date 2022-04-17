import { useState, useEffect } from 'react';

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('posts');

		const dummyData = [
			{
				title: 'REINTERPRETING THE GUCCI BAMBOO 1947 AND GUCCI DIANA',
				content:
					'Alessandro Michele’s Gucci Bamboo 1947 and Gucci Diana handbag designs appear in videos, images and illustrations created by talented artists and photographers from around the world who were asked to share their personal vision of the renowned style.Love, an oneiric dimension, a visceral sense of story and allegory wrapped in a well drafted package, universal emotions and unrealistic worlds – these are just some of the messages that the creators aim to convey through their artworks. Through unexpected videos, abstract photographs, illustrations, cartoons and a balloon sculpture, a curated selection of artists depicts the Gucci Bamboo 1947 and Gucci Diana handbags—both designed by Alessandro Michele and part of the House’s signature Beloved lines.',
			},
			{
				title: 'HERRIS DICKINSON IN THE GUCCI ARCHVIE',
				content:
					'The actor explores the Houses past and present through a blue coloring of the GG monogrammed motif. “A place which ostensibly preserves the past, but which is actually a bridge to the contemporary,” as Creative Director Alessandro Michele describes it, the Gucci Archive in Palazzo Settimanni becomes the backdrop of a GQ photo and video editorial that spotlights the reemergence of the House’s GG monogram in blue, originally introduced in the ‘70s. Within the 15th-century palace in Florence, actor Harris Dickinson discovers archival and new bags defined by the dark blue and beige palette, as well as the red and blue Web. Suitcases, carriers, briefcases and backpacks recall the House’s legacy in luggage, which continues in Love Parade with a selection of Ophidia travel bags. Regarding his experience within the space, Harris Dickinson tells GQ, “I have a particular fondness for preservation and history – it’s a reflection of the art of the time, an extension of society, of peoples desires, its everything. So, to be amongst that feels special.',
			},
			{
				title: 'MAGICAL MIRRORS AND METAMORPHOSIS',
				content:
					'During Milan Fashion Week, the House presented Exquisite Gucci, Alessandro Michele’s latest collection and an exploration of the phantasmagorical power of fashion presented through the reflections of magical mirrors. In his notes on the show, Alessandro Michele spoke of the “stifling perspective” of seeing things exactly as they are and thus ensured his latest collection was seen exactly as it wasn’t. Walls and pillars in the middle of the room were covered in illusionistic mirrors, creating dizziness and wonder while celebrating metamorphosis, “where the playful mechanics of refractions shatter every spatial limit and pave the way for escape.',
			},
			{
				title: 'CELEBRATING INTERNATIONAL WOMENS DAY',
				content:
					'On International Women’s Day, the House is proud to release a special capsule collection under the banner of CHIME FOR CHANGE, Gucci’s longstanding global campaign to convene, unite and strengthen the voices speaking out for gender equality. Comprised of a t-shirt and baseball cap, the capsule collection is centered around the theme of “Generation Equality,” reinforcing the urgency for accelerated progress toward a gender-equal future. To date, Gucci’s CHIME FOR CHANGE campaign has raised more than $19M to support projects and advocacy around the world. The new capsule collection is part of Gucci’s five-year commitment to UN Women’s Generation Equality Action Coalitions, supporting diverse women-led movements around the world.',
			},
			{
				title: 'GUCCI LOVE PARADE TOKYO',
				content:
					'A collection of spaces embodying Gucci Love Parade opens at the Shibuya Miyashita Park in Tokyo. o showcase the latest collection’s exploration of the myth of Hollywood, Gucci will hold a selection of immersive environments in Tokyo’s Shibuya Miyashita Park. From April 23rd to May 31st, three spaces inspired by Gucci Love Parade will bring to life experiences full of fascination and surprise. For those connected to Gucci’s official LINE account, a stamp hunt will be held. Once participants have collected stamps in all three rooms, a special and exclusive Gucci Love Parade gift will be offered (gifts are limited in number).',
			},
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyData;
		}
	};
	const [posts] = useState(getLocalData);

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, []);

	return (
		<section id='news'>
			<div className='inner'>
				<h1>NEWS</h1>

				<div className='wrap'>
					{posts.map((post, idx) => {
						const title = post.title;
						const content = post.content;

						if (idx < 4) {
							return (
								<article key={idx}>
									<h2>
										{title.length > 50 ? title.substr(0, 50) + '...' : title}
									</h2>
									<p>
										{content.length > 300
											? content.substr(0, 300) + '...'
											: content}
									</p>
								</article>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
}

export default News;
