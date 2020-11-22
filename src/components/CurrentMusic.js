import { Component } from 'react';
import axios from 'axios'


class CurrentMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem('token')
        }
        this.token = this.state.token
    }

    current = () => {
		axios
			.get('https://api.spotify.com/v1/me/player/currently-playing', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					dataCur: response.data,
					Momento: true,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					Antigas: true,
					click: false,
					topMusicas: false,
					topArtistas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					recomendacoesPag: false
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	latest = () => {
		axios
			.get('https://api.spotify.com/v1/me/player/recently-played', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					dataLast: response.data.items,
					Antigas: true,
					Momento: true,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					topArtistas: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					recomendacoesPag: false
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	current_music = () => {
		var musics = this.state.dataCur;
		var antigas = this.state.dataLast;
		var antiga = antigas.map((anterior) => {
			return (
				<div>
					<div className="antigas">
						<p className="antigastxt">{anterior.track.name}</p>
						<p className="antigastxt">{anterior.track.album.name}</p>
					</div>
					<hr className="line" />
				</div>
			);
		});

		return (
			<div>
				{!musics.is_playing ? (
					<div className="bloco3">
						{' '}
						Para acessar essa página é necessário estar escutando algo no Spotify !
					</div>
				) : (
					<div
						className="containerGeral"
						style={{
							backgroundColor: `url(${musics.item.album.images[0].url})`,
							backgroundImage: `url(${musics.item.album.images[0].url})`,
							backgroundSize: 0.25
						}}
					>
						<div className="escutados">
							<h1 className="title"> Escutando agora </h1>
						</div>

						<div className="blocoEscutando">
							<div className="centro">
								<img src={musics.item.album.images[0].url} width={350} height={350} />
							</div>

							<div className="containerEscutando">
								<p className="musicatxt"> {musics.item.name} </p> <br />
								<p className="albumtxt">{musics.item.album.name}</p>
							</div>
						</div>

						<div className="blocoEscutando">
							<div className="escutados">
								<h1 className="title"> Últimas Escutadas </h1>
								<div className="separando_antigas">
									<h4>Música</h4>
									<h4>Álbum</h4>
								</div>

								<div>{antiga}</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	};
}

    


export default CurrentMusic;