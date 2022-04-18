import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useState, useEffect, useRef } from 'react';
import Layout from '../common/Layout';

function Community() {
	const path = process.env.PUBLIC_URL;

	const today = () => {
		let now = new Date();
		let todayYear = now.getFullYear();
		let todayMonth = now.getMonth();
		let todayDate = now.getDate();
		let todayHours = now.getHours();
		let todayMinutes = now.getMinutes();
	};

	const eventArr = [
		{
			num: '01',
			title: 'HARI NEF ON THE GREEN CARPET',
			sub: 'Attending the Green Carpet Fashion Awards with Gucci CEO and president Marco Bizzarri in Milan, Hari Nef wore a custom gown.',
			description:
				'Designed by Alessandro Michele, every element of the dress features sustainable materials. All over sequins were crafted in recycled PET, featured in colored stripes and multi-dimensional flower embroideries, and fringes of glass bugles were sustainably colored. Hari’s accessories included a sustainable sequin clutch featuring a butterfly closure in recycled brass with lead-free metal hardware and metal free leather and sustainable silk interior, and shoes crafted in metal free leather with violet sustainable sequins in recycled PET and nickel-free hardware. She also wore Gucci fine jewelry made in sustainable gold.',
			image: `${path}/img/event_img1.jpg`,
		},
		{
			num: '02',
			title: 'IMAGINING THE GUCCI BLOOM SCENTS',
			sub: 'The three fragrances of Gucci Bloom are the protagonists of #InBloom Instagram posts by female creatives which embody the scents’ diverse.',
			description:
				'Emerging from a backdrop of dozens of lilac-hued jasmine flowers, Gucci Bloom Acqua Di Fiori by Nuria Val, captured in Japan by Coke Bartrina. Peonies and daisies from Clare Nicolson’s favorite flower market in London are combined with pastel colors and all of the Gucci Bloom scents, shot by photographer Rosie Harriet Ellis. Collecting treasures from the South England’s coastline, Caroline South’s images of Gucci Bloom Nettare di Fiori include fragments of shells and pebbles.',
			image: `${path}/img/event_img2.jpg`,
		},

		{
			num: '03',
			title: 'ANTICA LIBRERIA CASCIANELLI',
			sub: 'One of the oldest bookstores in Rome, the Antica Libreria Cascianelli, is a treasure chest of rare books, objets d’art, antiques and prints.',
			description:
				'A true collector’s paradise unfolding in a décor essentially unchanged since the early XIXth century, complete with an original rail mechanism that operates the retractable store window, and a secret bookcase door opening to backrooms, likely the set for clandestine meetings. Refined and carefully curated, the store is a cabinet of curiosities wrapped in its original boiseries and blown glass bookcases, and populated with works on Roman history, literature, botany, and medicine. Religion, science, art, and rare first editions meet in its shelves. Its counters are magical displays of scientific objects, memorabilia and carefully chosen artwork and decorative pieces from past eras and faraway places.',
			image: `${path}/img/event_img3.jpg`,
		},
		{
			num: '04',
			title: 'I WAS A SARI',
			sub: 'Gucci Equilibrium—the House’s new programme and portal to connect people, planet and purpose—features ‘I was a Sari’ a social enterprise.',
			description:
				'The circular economy project led by Gucci involves the up-cycling of left-over scrap leather and fabric materials to produce embroidery with one-off handcrafted designs. Women from marginalized communities in Mumbai are trained to become artisans and embroiderers to recreate saris from recycled ones, teaching them new skills and income to create futures for them and their families.',
			image: `${path}/img/event_img4.jpg`,
		},
	];

	const [eventInfo, setEventInfo] = useState(eventArr);

	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	const getLocalData = () => {
		let data = localStorage.getItem('posts');
		data = JSON.parse(data);
		return data;
	};

	const [posts, setPosts] = useState(getLocalData);

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요');
			return;
		}
		setPosts([{ title: inputVal, content: textareaVal }, ...posts]);
		resetPost();
	};

	const deletePost = (index) => {
		setPosts(posts.filter((post, idx) => idx !== index));
	};

	const editSavePost = (index) => {
		const inputVal = editInput.current.value.trim();
		const textareaVal = editTextarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('제목과 본문을 모두 입력하세요');
			return;
		}

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputVal;
					post.content = textareaVal;
					post.editPost = false;
				}
				return post;
			})
		);
	};

	const editPost = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx == index) post.editPost = true;
				return post;
			})
		);
	};

	const editCanclePost = (index) => {
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.editPost = false;
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout
			name={'community'}
			subName1={'Event'}
			subName2={'News'}
			subVisual={'figure2'}>
			<div className='event'>
				<h1>EVENT</h1>
				<div className='wrap'>
					{eventInfo.map((info, idx) => {
						return (
							<article>
								<div className='pic'>
									<img src={info.image} />
								</div>
								<div className='txt_inner'>
									<div className='txt_left'>
										<h2>{info.num}</h2>
									</div>
									<div className='txt_right'>
										<h3>{info.sub}</h3>
									</div>
									<span>→</span>
								</div>
							</article>
						);
					})}
				</div>
			</div>

			<div className='news'>
				<h1>NEWS</h1>
				<div className='wrap'>
					<div className='newsTxt'>
						<h2>VAULT GUCCI</h2>
						<b>The experimental concept space by Gucci</b>
						<p>
							Created from the vision of Alessandro Michele, Vault is a place
							where past, present and future co-exist through the power of the
							imagination. Its name evokes an air of magic, denoting a pursuit
							of precious wonders that go beyond the confines of time and
							space—free-dimensional and forever in flux.
						</p>
					</div>
					<div className='box_inner'>
						<div className='inputBox'>
							<h2>WRITE</h2>

							<h3>TITLE</h3>
							<input type='text' placeholder='Write a Title' ref={input} />

							<h3>CONTENTS</h3>
							<textarea
								placeholder='Write your Message'
								ref={textarea}></textarea>

							<div className='btns'>
								<div className='wrap'>
									<button onClick={resetPost}>CANCLE</button>
									<button onClick={createPost}>CREATE</button>
								</div>
							</div>
						</div>

						<div className='showBox'>
							<h2>RECENTS NEWS</h2>
							{posts.map((post, idx) => {
								let con = post.content.split('\n');

								return (
									<article key={idx}>
										{post.editPost ? (
											<div className='editBox'>
												<div className='wrap'>
													<h3>TITLE</h3>
													<input
														type='text'
														defaultValue={post.title}
														ref={editInput}
													/>
												</div>
												<div className='wrap'>
													<h3>CONTENTS</h3>
													<textarea
														placeholder='Write your Message'
														defaultValue={post.content}
														ref={editTextarea}></textarea>
												</div>

												<div className='btns'>
													<div className='wrap'>
														<button onClick={() => editSavePost(idx)}>
															SAVE
														</button>
														<button onClick={() => editCanclePost(idx)}>
															CANCLE
														</button>
													</div>
												</div>
											</div>
										) : (
											<div className='txtBox'>
												<div className='txtBox_inner'>
													<h3>{post.title}</h3>
													<p>
														{con.map((txt, idx) => {
															return (
																<React.Fragment key={idx}>{txt}</React.Fragment>
															);
														})}
													</p>
												</div>

												<div className='btns'>
													<div className='wrap'>
														<button onClick={() => deletePost(idx)}>
															DELETE
														</button>
														<button onClick={() => editPost(idx)}>EDIT</button>
													</div>
												</div>
											</div>
										)}
									</article>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Community;
