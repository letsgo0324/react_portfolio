import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as types from './redux/actionType';

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

function App() {
	const path = process.env.PUBLIC_URL;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.MEMBER.start });
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.GALLERY.start });
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
