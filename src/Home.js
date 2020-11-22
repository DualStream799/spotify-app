import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewReleases from './components/NewReleases';
import App from './App'
import Recomended from './components/Recomended'
import Favorites from './components/Favorites';
import Nav from './components/Nav' 
import UserPlaylist from './components/UserPlaylist'
import { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
		const parametros = this.getHashParams();
		this.token = parametros.access_token;
		localStorage.setItem('token', this.token)

		this.state = {
		};
	}

	componentDidMount= () => {
		axios
			.get('https://api.spotify.com/v1/me/tracks?limit=30', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					dataTracks: response.data.items,
					data: response.data.items,
				});
				console.log(this.state.data)
			})
			.catch((erro) => console.log(erro.response.data));
	};


	getHashParams = () => {
		var hashParams = {};
		var e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		e = r.exec(q);
		while (e) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
			e = r.exec(q);
		}
		return hashParams;
	}
	render() {
	return(
		<BrowserRouter>
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={App}/>
					<Route exact path='/newReleases' component={NewReleases}/>
					<Route exact path='/recomended' component={Recomended}/>
					<Route exact path='/Favorites' component={Favorites}/>
					<Route exact path='/userPlaylist' component={UserPlaylist}/>
				</Switch>
			</div>
		</BrowserRouter>
	)}
}

export default Home;