import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Women from './components/main/Women';
import Men from './components/main/Men';
import Rolling from './components/main/Rolling';
import TextBox from './components/main/TextBox';
import Banner from './components/main/Banner';
import News from './components/main/News';

//sub
import About from './components/sub/About';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Contact from './components/sub/Contact';
import Join from './components/sub/Join';

const path = process.env.PUBLIC_URL;

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} path={path} logoSrc={`${path}/img/logo1.png`} />

					<Visual />
					<Women />
					<Men />
					<Rolling />
					<TextBox />
					<Banner />
					<News />
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
