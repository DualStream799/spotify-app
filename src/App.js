import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import logoLindo from './logoLindo.png';
import btnInscrever from './inscrever.png';
import btnEntrar from './entre.png'
import { Link } from 'react-router-dom';
require('./App.css');

class App extends React.Component {
	// constructor(props) {
	//   super(props)
	//   const parametros = this.getHashParams();
	//   this.token = parametros.access_token;
	// }

	// getHashParams() {
	//   var hashParams = {};
	//   var e, r = /([^&;=]+)=?([^&;]*)/g,
	//   q = window.location.hash.substring(1);
	//   e = r.exec(q)
	//   while (e) {
	//     hashParams[e[1]] = decodeURIComponent(e[2]);
	//     e = r.exec(q);
	//   }
	//   return hashParams;
	//  }

	// topTracksLorde = () =>{
	//   $.ajax({
	//     method: "GET",
	//     dataType: "Json",
	//     url:"https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR",
	//     headers: {
	//     Authorization: `Bearer ${this.token}`
	//     }
	//   })
	//   .then(dados => {
	//     console.log(dados.tracks)
	//   })
	// }

	// /*Userplaylist = () =>{
	//   $.ajax({
	//     method: "GET",
	//     dataType: "Json",
	//     url:"https://api.spotify.com/v1/users/mat.f.santana/playlists",
	//     headers: {
	//     Authorization: `Bearer ${this.token}`
	//     }
	//   })
	//   .then(dados => {
	//     console.log(dados.playlists[0].name)
	//   })
	// }
	// <button onClick={this.Userplaylist}>Buscar playlist do user</button>*/
	cadastroPopUp() {
		window.open("https://www.spotify.com/br/signup/", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")
	}

	render() {
		return (
			<div className="App">
				<div>
					<img className="logo" src={logoLindo} alt="logo" />
				</div>
				<div className='botoesBar'>
						<a href="https://spotifyapimanager.herokuapp.com/login" >
							<img className="botao1" src={btnEntrar} alt="botão login" />
						</a>
						<a data-testid='cadastro' target='popup' onClick={this.cadastroPopUp}>
							<img className='botao1' src={btnInscrever} alt='botão inscreva-se'/>
						</a>
				</div>
			</div>
		);
	}
}

export default App;
