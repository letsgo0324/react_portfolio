import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMembers } from './redux/actions';
import axios from 'axios';

import './scss/style.scss';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Main from './components/main/Main';

//sub
import About from './components/sub/About';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Join from './components/sub/Join';
import { useEffect } from 'react';

function App() {
	const path = process.env.PUBLIC_URL;

	const dispatch = useDispatch();
	const fetchMembers = async () => {
		const url = path + '/DB/member.json';

		await axios.get(url).then((json) => {
			dispatch(setMembers(json.data.data));
		});
	};

	useEffect(() => {
		fetchMembers();
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>

				<Route path='/'>
					<Header type={'sub'} path={path} logoSrc={`${path}/img/logo2.png`} />
				</Route>
			</Switch>

			<Route path='/about' component={About} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
