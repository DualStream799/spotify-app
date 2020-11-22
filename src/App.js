import React from 'react';
import './App.css';
import logoLindo from './logoLindo.png';
import botao from './botao.png';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					<img className="logo" src={logoLindo} alt="logo" />
				</div>
				<div>
					<button className="botao">
						<a href="https://spotifyapimanager.herokuapp.com/login">
							<img className="botao1" src={botao} alt="botao" />
						</a>
					</button>
				</div>
			</div>
		);
	}
}

export default App;
