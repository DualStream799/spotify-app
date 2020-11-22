import { Component } from 'react';
import axios from 'axios'

class TopMusic extends Component {
    topMusic = () => {
		axios
			.get('https://api.spotify.com/v1/me/top/tracks?limit=20', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					dataTopM: response.data.items,
					topMusicas: true,
					topArtistas: false,
					Momento: false,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					click: false,
					favoritos: false,
					artistaId: [],
					home: false,
					maisOuvidasM: response.data.items[0].id,
					recomendacoesPag: false
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	fav_musics = () => {
		var musicas = this.state.dataTopM;
		var lista = [];


		var musica = musicas.map((topMusicas) => {
			lista.push(topMusicas.id);

			return (
				<div className="grid-item">
					<img className="imagesRound" src={topMusicas.album.images[0].url} width={150} height={150} />
					<div className="centralizacao">
						<p className="TrackName">{topMusicas.name}</p>
						<p className="Texto">{topMusicas.artists[0].name}</p>
					</div>

				</div>
			);
		});

		return (
			<div className="bloco">
				<h1 className="title">Suas Músicas Favoritas</h1>
				<div className="grid-container">{musica}</div>
			</div>
		);
	};
}

export default TopMusic;