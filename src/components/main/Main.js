//common
import Header from '../common/Header';

//main
import Visual from './Visual';
import Women from './Women';
import Men from './Men';
import Vids from './Vids';
import Campaign from './Campaign';
import Stories from './Stories';
import Banner from './Banner';
import News from './News';
import Member from './Member';
import Btns from './Btns';
import Anime from '../../class/anime.js';

import { useRef, useEffect, useState } from 'react';

function Main() {
	const path = process.env.PUBLIC_URL;

	const main = useRef(null);
	const pos = useRef([]);
	const [index, setIndex] = useState(0);
	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const sections = main.current.querySelectorAll('.myScroll');
		pos.current = [];
		for (const section of sections) pos.current.push(section.offsetTop);
	};

	const activation = () => {
		const base = -300;
		let scroll = window.scrollY;
		setScrolled(scroll);
		const btns = main.current.querySelectorAll('.scrollBtns li');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();

		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);

	return (
		<main ref={main}>
			<Header type={'main'} path={path} logoSrc={`${path}/img/logo1.png`} />
			<Visual />
			<Women scrolled={scrolled} posStart={pos.current[1]} />
			<Men scrolled={scrolled} posStart={pos.current[2]} />
			<Vids scrolled={scrolled} posStart={pos.current[3]} />
			<Campaign />
			<Stories />
			<Banner />
			<News />
			<Member />
			<Btns setIndex={setIndex} />
		</main>
	);
}

export default Main;
