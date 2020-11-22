import { Component } from 'react';
import axios from 'axios'
import {
    AiFillCustomerService,
    AiOutlineTeam
} from 'react-icons/ai';

class TopArtists extends Component {
    topArtist = () => {
		axios
			.get('https://api.spotify.com/v1/me/top/artists', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					dataTopA: response.data.items,
					topArtistas: true,
					Novidades: false,
					Momento: false,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					click: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					recomendacoesPag: false
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	fav_artists = () => {
		var cantores = this.state.dataTopA;
		var cantor = cantores.map((topCantores) => {
			return (
				<div className="grid-item">
					<img className="imagesRound" src={topCantores.images[0].url} width={150} height={150} />
					<div className="centralizacao">
						<p className="TrackName">{topCantores.name}</p>
						<p className="Texto">
							{' '}
							<AiFillCustomerService /> {topCantores.genres[0]}
						</p>

						<p className="Texto">
							<AiOutlineTeam />
							{topCantores.followers.total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
						</p>
					</div>
				</div>
			);
		});
		return (
			<div className="bloco">
				<h1 className="title">Seus Artistas Favoritos</h1>
				<div className="grid-container">{cantor}</div>
			</div>
		);
	};
}

export default TopArtists;