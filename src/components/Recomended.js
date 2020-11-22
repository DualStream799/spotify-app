import { Component } from 'react';
import axios from 'axios';

class Recomended extends Component {
    recomendacoesPag = () => {
		axios
			.get('https://api.spotify.com/v1/recommendations', {
				headers: {
					Authorization: `Bearer ${this.token}`
				},
				params: {
					limit: 12,
					seed_artists: this.state.artistaId,
					seed_genres: this.state.dataGen,
					seed_tracks: this.state.maisOuvidasM
				}
			})
			.then((response) => {
				this.setState({
					dataReco: response.data.tracks,
					Antigas: false,
					Momento: false,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					favoritos: false,
					topMusicas: false,
					topArtistas: false,
					home: false,
					recomendacoes: false,
					recomendacoesPag: true
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	pag_recomend = () => {
		var recomendacao = this.state.dataReco;
		var recomendar = recomendacao.map((topRecomendacao) => {
			return (
				<div className="grid-item">
					<img className="imagesRound" src={topRecomendacao.album.images[0].url} width={150} height={150} />
					<div className="centralizacao">
						<p className="TrackName">{topRecomendacao.name}</p>
					</div>
				</div>
			);
		});
		return (
			<div className="bloco">
				<h1 className="title">Sua playlist customizada!</h1>
				<div className="grid-container">{recomendar}</div>
			</div>
		);
	};

}
export default Recomended;