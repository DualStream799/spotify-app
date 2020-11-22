import { Component } from 'react';
import axios from 'axios';

class Favorites extends Component {
    favoritos = () => {
		axios
			.post('https://spotifyapimanager.herokuapp.com/router/users/', {
				user: this.state.user,
				artista: this.state.meusFavoritos,
				genero: this.state.meusFavoritosGeneros
			})
			.then((response) => {
				this.setState({ favoritos: true });
				this.setState({
					userId: response.data._id,
					favoritos: true,
					Momento: false,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					topMusicas: false,
					topArtistas: false,
					meusFavoritos: [],
					meusFavoritosGeneros: [],
					artistaId: [],
					home: false,
					geraPlaylist: true,
					recomendacoesPag: false
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	handleClick = (e) => {
		var item = e.target.name;
		var isChecked = e.target.checked;
		var array = this.state.meusFavoritos;
		var index = array.indexOf(e.target.name);

		if (isChecked) {
			this.setState({ meusFavoritos: [ ...this.state.meusFavoritos, item ], isChecked: true });
		} else {
			delete array[index];
			this.setState({ isChecked: false });
		}


	};

	handleClickGeneros = (e) => {
		var item = e.target.name;
		var isChecked = e.target.checked;
		var array = this.state.meusFavoritosGeneros;
		var index = array.indexOf(e.target.name);

		if (isChecked) {
			this.setState({ meusFavoritosGeneros: [ ...this.state.meusFavoritosGeneros, item ], isCheckedGenre: true });
		} else {
			delete array[index];
			this.setState({ isCheckedGenre: false });
		}


	};

	retornaMeusFavs = () => {
		return <div className="bloco">{this.state.meusFavoritos}</div>;
	};

	pesquisa = () => {
		axios
			.get('https://api.spotify.com/v1/search', {
				headers: {
					Authorization: `Bearer ${this.token}`
				},
				params: {
					q: this.state.search,
					type: 'artist',
					limit: 10
				}
			})
			.then((response) => {
				this.setState({
					dataPesq: [ ...this.state.dataPesq, response.data.artists.items[0].name ],
					artistaId: [ ...this.state.artistaId, response.data.artists.items[0].id ],
					Antigas: false,
					Momento: false,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					favoritos: true,
					topMusicas: false,
					topArtistas: false,
					home: false,
					recomendacoesPag: false
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	seusFavoritos = () => {
		var artistas = [];

		var generos = [
			'reggae',
			'country',
			'rock',
			'pop',
			'jazz',
			'rap',
			'sertanejo',
			'pagode',
			'blues',
			'soul',
			'funk',
			'indie',
			'MPB',
			'eletrônica',
			'disco',
			'punk',
			'acústico'
		];

		var click = this.handleClick;
		var clickGeneros = this.handleClickGeneros;
		var retorna = this.favoritos;
		var pesquisa = this.pesquisa;
		var dataPesq = this.state.dataPesq;
		var geraPlaylist = this.state.geraPlaylist;
		var gera = this.gera;

		var teste_generos = generos.map(function(genero) {
			return (
				<div className="inputGenero" style={{ backgroundColor: 'white' }}>
					<input type="checkbox" name={genero} ref="check_me" onChange={clickGeneros} />
					<label className="testeCheck" key={genero}>
						{genero}
					</label>
				</div>
			);
		});

		return (
			<div className="bloco">
				<div>
					<h1 className="title">Seus Favoritos</h1>
					<p className="descricao">
						Selecione seus artistas e gêneros favoritos para que possamos criar uma playlist a partir do
						seus gostos!
					</p>
				</div>
				<div className="form_group field">
					<input
						type="text"
						className="form_field"
						placeholder="Pesquise mais artistas"
						onChange={(e) => {
							this.setState({ search: e.target.value });
						}}
					/>
					<button onClick={pesquisa} className="btnSearch">
						Adicionar
					</button>
				</div>
				<div>
					<h2 className="artistaTitulo">Artistas</h2>
					<div style={{ marginTop: dataPesq === '' ? 0 : 50 }}>
						{dataPesq === '' ? (
							<div className="descArt">
								<p className="descricao">
									{' '}
									Pesquise seus artistas favoritos. Lembre-se que é necessário marcar o checkbox.
								</p>
							</div>
						) : (
							<div className="generos">
								{dataPesq.map(function(artista) {
									return (
										<div className="input">
											<input type="checkbox" name={artista} onChange={click} />
											<label className="testeCheck" key={artista}>
												{artista}
											</label>
										</div>
									);
								})}
							</div>
						)}

						{/* <div className="generos"> {teste}</div> */}
					</div>
					<h2 className="artistaTitulo">Gêneros</h2>
					<div className="generos">{teste_generos}</div>
				</div>
				{geraPlaylist ? (
					<button className="btnPlaylist" onClick={gera}>
						Gerar Playlist Costumizada{' '}
					</button>
				) : (
					<button className="btnSearch" onClick={retorna}>
						Enviar
					</button>
				)}
			</div>
		);
	};
}

export default Favorites;