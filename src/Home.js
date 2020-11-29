import React, { Component } from 'react';
import AddMusicToPlaylist from "./Components/AddMusicToPlaylist"
import $ from 'jquery';
import axios from 'axios';
import './Home.css';
import {
	AiOutlineTeam,
	AiFillCustomerService,
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterSquare,
	AiOutlineLinkedin,
} from 'react-icons/ai';
import Header from './Components/Header/Header'
import logoLindo from './logoLindo.png';
import {FacebookShareButton, RedditShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, FacebookIcon, RedditIcon, EmailIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import { Button } from '@material-ui/core';


class Home extends Component {
	constructor(props) {
		super(props);
		const parametros = this.getHashParams();
		this.token = parametros.access_token;

		this.state = {
			data: [],
			dataLan: [],
			dataTracks: [],
			dataCur: [],
			dataLast: [],
			dataTopA: [],
			datarelA: [],
			dataTopM: [],
			dataPlaylistTracks: [],
			dataPesq: '',
			check: '',
			user: '',
			Userplaylist: false,
			PlaylistTracks: false,
			Novidades: false,
			Momento: false,
			likedTracks: false,
			Antigas: false,
			favoritos: false,
			topArtistas: false,
			relatedArtistas: false,
			topMusicas: false,
			meusFavoritos: [],
			meusFavoritosGeneros: [],
			search: '',
			isChecked: false,
			isCheckedGenre: false,
			artistaId: [],
			home: true,
			geraPlaylist: false,
			dataGen: false,
			userId: '',
			maisOuvidasM: [],
			recomendacoes: false,
			recomendacoesPag: false,
			recentlyPlayedTrack: '',
			featuredPage: false,
			id_musica: '',
			analise_musica: [],
			playlistPesquisa:[],
			shareWpp: true,
			shareFace: true,
			boolean_analise: false,
			recentlyPlayedTrack: '',
			pesquisaPlaylist: false,
			keyword:'',
			verificaFollow:true,
			seguindo:false,
			isLoggedIn : false
		};

		this.recomendacoesPag = this.recomendacoesPag.bind(this);
		this.Userplaylist = this.Userplaylist.bind(this);
		this.playlist = this.playlist.bind(this);
		this.playlistTracks = this.playlistTracks.bind(this);
		this.list_tracks = this.list_tracks.bind(this);
		this.newRelease = this.newRelease.bind(this);
		this.lancamentos_teste = this.lancamentos_teste.bind(this);
		this.savedTracks = this.savedTracks.bind(this);
		this.myTracks = this.myTracks.bind(this);
		this.current = this.current.bind(this);
		this.current_music = this.current_music.bind(this);
		this.latest = this.latest.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.seusFavoritos = this.seusFavoritos.bind(this);
		this.retornaMeusFavs = this.retornaMeusFavs.bind(this);
		this.favoritos = this.favoritos.bind(this);
		this.pesquisa = this.pesquisa.bind(this);
		this.fav_artists = this.fav_artists.bind(this);
		this.topArtist = this.topArtist.bind(this);
		this.relatedArtist = this.relatedArtist.bind(this);
		this.rel_artists = this.rel_artists.bind(this);
		this.fav_musics = this.fav_musics.bind(this);
		this.topMusic = this.topMusic.bind(this);
		this.gera = this.gera.bind(this);
		this.pag_recomend = this.pag_recomend.bind(this);
		this.analiseMusica = this.analiseMusica.bind(this);
		this.musicCarac = this.musicCarac.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.recentlyPlayedTrack = this.recentlyPlayedTrack.bind(this);

		this.busca = this.busca.bind(this);
		this.resultPlaylist = this.resultPlaylist.bind(this);
		this.verifica = this.verifica.bind(this);
		this.follow = this.follow.bind(this);
		this.getid=this.getid.bind(this);
		this.funcao1=this.funcao1.bind(this);
		this.feaaturedPlaylists = this.feaaturedPlaylists.bind(this);
		this.pagFeaturedP = this.pagFeaturedP.bind(this);

	}

	handleChange(event) {
        var handleState = (state, event) => {
            state[event.target.name] = event.target.value
            return state
        }

        this.setState(handleState(this.state, event))
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
				console.log(this.token)
			})
			.catch((erro) => console.log(erro.response.data));
	};



	getHashParams() {
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

	// --------------------- musicas salvas -----------------------------

	savedTracks = () => {
		axios
			.get('https://api.spotify.com/v1/me/tracks?limit=30', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					dataTracks: response.data.items,
					Novidades: false,
					likedTracks: true,
					Userplaylist: false,
					PlaylistTracks: false,
					Momento: false,
					Antigas: false,
					topArtistas: false,
					relatedArtistas: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
					
				});
			})
			.catch((erro) => this.setState({
				likedTracks: true,
				Novidades: false,
				Userplaylist: false,
				Momento: false,
				Antigas: false,
				topArtistas: false,
				relatedArtistas: false,
				topMusicas: false,
				favoritos: false,
				artistaId: [],
				home: false,
				boolean_analise: false,
				pesquisaPlaylist: false,
				recomendacoesPag: false
			}));
	};

	myTracks = () => {
		console.log(this.state.boolean_analise)

		var tracks = this.state.dataTracks;
		var track_saved = tracks.map((songs) => {
			var tempo = songs.track.duration_ms / 1000;
			var minutos = 0;
			while (tempo >= 60) {
				tempo = tempo - 60;
				minutos += 1;
			}
			console.log(songs.track.id)
			
			return (
				<div>
					<div className="antigas">
						<img data-testid='musicImg' src={songs.track.album.images[0].url} width={150} height={150} />
						<p className="antigastxt">{songs.track.name}</p>
						<p className="antigastxt">{songs.track.album.artists[0].name}</p>
						<p className="antigastxt">
							{minutos}:{tempo.toFixed(0)}
						</p>
						<AddMusicToPlaylist playlists = {this.state.data} tracks = {songs.track} token = {this.token} />
						<button onClick={() => this.analiseMusica(songs.track.id)}>Analise da Musica</button>
						
						
					</div>
					
					<hr className="line" />
				</div>
			);
		});
		return (
			<div>{
				!this.state.isLoggedIn?<div className="bloco"> <h1 className="title">Por favor, faça login</h1></div> :
				<div className="bloco">
					<h1 className="title">Minhas Músicas</h1>
					<div className="separando">
						<div className="Texto"> Músicas</div>
						<div className="Texto"> Artista</div>
						<div className="Texto"> Tempo</div>
						<div className="Texto"> Analise</div>
						
					</div>
					<div className="tracks-container">
						<div>{track_saved}</div>
					</div>
				</div>
				}
			</div>
		);
	};

	// ------------------------- lançamentos -----------------------------------

	newRelease = () => {
		axios
			.get('https://api.spotify.com/v1/browse/new-releases?limit=16', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			
			.then((response) => {
				this.setState({
					dataLan: response.data.albums.items,
					Novidades: true,
					Userplaylist: false,
					likedTracks: false,
					Momento: false,
					Antigas: false,
					topArtistas: false,
					relatedArtistas: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
				});
			})
			.catch((erro) => this.setState({
				Novidades: true,
				Userplaylist: false,
				likedTracks: false,
				Momento: false,
				Antigas: false,
				topArtistas: false,
				relatedArtistas: false,
				topMusicas: false,
				favoritos: false,
				artistaId: [],
				home: false,
				boolean_analise: false,
				pesquisaPlaylist: false,
				recomendacoesPag: false,
			}));
	};

	lancamentos_teste = () => {
		var lancamentos = this.state.dataLan;
		var lancamento = lancamentos.map((release) => {
			
			return (
				<div className="grid-item">
					<img className="imagesRound" src={release.images[0].url} width={150} height={150} />
					<div className="centralizacao">
						<p className="TrackName">{release.name}</p>
						<p className="Texto">{release.release_date} </p>
						<p className="Texto"> {release.artists[0].name} </p>						
					</div>
				</div>
			);
		});
		return (
			<div>{
				!this.state.isLoggedIn?<div className="bloco"> <h1 className="title">Por favor, faça login</h1></div> :
				<div className="bloco">
					<h1 className="title">Novos lançamentos</h1>
					<div className="grid-container">{lancamento}</div>
				</div>
				}
			</div>
		);
	};

	// --------------------------- playlists do usuário ------------------------------

	Userplaylist = () => {
		axios
			.get('https://api.spotify.com/v1/me/playlists', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					data: response.data.items,
					user: response.data.items[0].owner.id,
					Userplaylist: true,
					PlaylistTracks: false,
					Novidades: false,
					likedTracks: false,
					Momento: false,
					Antigas: false,
					topMusicas: false,
					topArtistas: false,
					relatedArtistas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
				});
			})
			.catch((erro) => this.setState({
				Userplaylist: true,
				Novidades: false,
				likedTracks: false,
				Momento: false,
				Antigas: false,
				topMusicas: false,
				topArtistas: false,
				relatedArtistas: false,
				favoritos: false,
				artistaId: [],
				home: false,
				boolean_analise: false,
				pesquisaPlaylist: false,
				recomendacoesPag: false,
			}));
	};


	playlist = () => {
		var playlists = this.state.data;
		var playlistImg = playlists.map((playlist) => {
			// this.setState({ user: playlist.owner });
			return (
				<div>
					<div className="organizacao">
						<img className="images" src={playlist.images[0].url} width={150} height={150} />
						<div className="desc">
							<div className="info"> {playlist.name}</div>
							{playlist.collaborative ? (
								<h4 className="info2"> Playlist Colaborativa</h4>
							) : (
								<h4 className="info2"> Playlist Não Colaborativa </h4>
							)}
							{playlist.public ? (
								<h4 className="info2"> Playlist Pública</h4>
							) : (
								<h4 className="info2"> Playlist Privada </h4>
							)}
						</div>
						<button type="submit" onClick={() => {this.playlistTracks(playlist.id)}} className="btnSearch">
							Ver mais
						</button>
					</div>
					<hr className="lineORetorno" />
				</div>
			);
		});

		return (
			<div>
				{!this.state.isLoggedIn?<div className="bloco"> <h1 className="title">Por favor, faça login</h1></div> :
				<div className="bloco">
					<h1 className="title">Suas playlists</h1>
					<div> {playlistImg}</div>
				</div>
				}
			</div>
		);
	};

	// ---------------------------- playlist tracks -------------------------------
	playlistTracks = (playlist_id) => {
		axios
			.get('https://api.spotify.com/v1/playlists/' + playlist_id + '/tracks', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				console.log(response);
				this.setState({
					dataPlaylistTracks: response.data.items,
					topMusicas: false,
					topArtistas: false,
					relatedArtistas: false,
					Momento: false,
					Userplaylist: false,
					PlaylistTracks: true,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					click: false,
					favoritos: false,
					artistaId: [],
					home: false,
					pesquisaPlaylist: false,
					recomendacoesPag: false
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	list_tracks = () => {
		var tracks = this.state.dataPlaylistTracks;
		
		var track_saved = tracks.map((songs) => {

			console.log(songs)
			return (
				<div>
					<div className="antigas">
						<img src={songs.track.album.images[0].url} width={150} height={150} />
						<p className="antigastxt">{songs.track.name}</p>
						<p className="antigastxt">{songs.track.album.artists[0].name}</p>
						<p className="antigastxt"> 
							<a href={songs.track.album.external_urls.spotify}>
								<Button 
									variant="contained"
									color="secondary"
									// redireciona para songs.track.album.external_urls.spotify
								>
									álbum 	 
								</Button>
							</a>
							<a style={{margin: "7px" }} href={songs.track.external_urls.spotify}>
								<Button 
									variant="contained"
									color="secondary"
									// redireciona para songs.track.artists.external_urls.spotify
								>
									Ouça novamente 	 
								</Button>
							</a>
							
						</p>
					</div>
					<hr className="line" />
				</div>
			);
		});
		return (
			<div className="bloco">
				<h1 className="title">Músicas</h1>
				<div className="separando">
					<div className="Texto"> Músicas</div>
					<div className="Texto"> Artista</div>
					<div className="Texto"> </div>
					<div className="Texto"> </div>
				</div>
				<div className="tracks-container">
					<div>{track_saved} </div>
				</div>
			</div>
		);

	};

	// ----------------------------- escutados -------------------------

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
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					Antigas: true,
					click: false,
					topMusicas: false,
					topArtistas: false,
					relatedArtistas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
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
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					topArtistas: false,
					relatedArtistas: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
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
						<Header></Header>
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

	// ---------------------------- top musicas -------------------------------
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
					relatedArtistas: false,
					Momento: false,
					Userplaylist: false,
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					click: false,
					favoritos: false,
					artistaId: [],
					home: false,
					maisOuvidasM: response.data.items[0].id,
					recomendacoesPag: false,
					boolean_analise: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
				});
			})
			.catch((erro) => this.setState({
				topMusicas: true,
				Novidades: false,
				likedTracks: false,
				Momento: false,
				Antigas: false,
				topArtistas: false,
				relatedArtistas: false,
				favoritos: false,
				artistaId: [],
				home: false,
				boolean_analise: false,
				pesquisaPlaylist: false,
				recomendacoesPag: false,
			}));
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
			<div>
				{!this.state.isLoggedIn?<div className="bloco"> <h1 className="title">Por favor, faça login</h1></div> :
				<div className="bloco">
					<h1 className="title">Suas Músicas Favoritas</h1>
					<div className="grid-container">{musica}</div>
				</div>
				}
			</div>
		);

		// this.setState({ maisOuvidasM: lista });
	};

	// ----------------------------- top artistas ------------------------------

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
					relatedArtistas: false,
					Momento: false,
					Userplaylist: false,
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					click: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
				});
			})
			.catch((erro) => this.setState({
				topArtistas: true,
				relatedArtistas: false,
				Novidades: false,
				likedTracks: false,
				Momento: false,
				Antigas: false,
				topMusicas: false,
				favoritos: false,
				artistaId: [],
				home: false,
				boolean_analise: false,
				pesquisaPlaylist: false,
				recomendacoesPag: false,
			}));
	};

	fav_artists = () => {
		var artistUrlStart = "https://open.spotify.com/follow/1/?uri=spotify:artist:";
		var artistUrlEnd = "&size=detail&theme=dark";
		var cantores = this.state.dataTopA;
		var cantor = cantores.map((topCantores) => {
			return (
				<div class="grid-item">
					<iframe class="follow_artist" src={artistUrlStart + topCantores.id + artistUrlEnd}
					scrolling="no" frameborder="0" allowtransparency="true"></iframe>
						<p class="Texto" align="center">
							<AiFillCustomerService /> {topCantores.genres[0]}
						</p>
						<button type="submit" onClick={() => {this.relatedArtist(topCantores.id)}} class="btnSearch" align="center">
							Related
						</button>
					</div>
			);
		});
		return (
			<div>{
				!this.state.isLoggedIn?<div className="bloco"> <h1 className="title">Por favor, faça login</h1></div> :
				<div className="bloco">
					<h1 className="title">Seus Artistas Favoritos</h1>
					<div className="grid-container">{cantor}</div>
				</div>
				}
			</div>
		);
	};

	// ----------------------------- related artistas ------------------------------

	relatedArtist = (artist_id) => {
		axios
			.get('https://api.spotify.com/v1/artists/' + artist_id + '/related-artists', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					datarelA: response.data.artists,
					topArtistas: false,
					relatedArtistas: true,
					Momento: false,
					Userplaylist: false,
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					click: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					isLoggedIn : true
				});
			})
			.catch((erro) => this.setState({
				topArtistas: false,
				relatedArtistas: true,
				Novidades: false,
				likedTracks: false,
				Momento: false,
				Antigas: false,
				topMusicas: false,
				favoritos: false,
				artistaId: [],
				home: false,
				boolean_analise: false,
				recomendacoesPag: false,
			}));
	};

	rel_artists = () => {
		var artistUrlStart = "https://open.spotify.com/follow/1/?uri=spotify:artist:";
		var artistUrlEnd = "&size=detail&theme=dark";
		var cantores = this.state.datarelA;
		var cantor = cantores.map((topCantores) => {
			return (
				<div class="grid-item">
					<iframe class="follow_artist" src={artistUrlStart + topCantores.id + artistUrlEnd}
					scrolling="no" frameborder="0" allowtransparency="true"></iframe>
						<p class="Texto" align="center">
							<AiFillCustomerService /> {topCantores.genres[0]}
						</p>
					</div>
			);
		});
		return (
			<div>{
				!this.state.isLoggedIn?<div className="bloco"> <h1 className="title">Por favor, faça login</h1></div> :
				<div className="bloco">
					<h1 className="title">Artistas Relacionados</h1>
					<div className="grid-container">{cantor}</div>
				</div>
				}
			</div>
		);
	};


	// ----------------------------- favoritos -------------------------
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
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					Antigas: false,
					topMusicas: false,
					topArtistas: false,
					relatedArtistas: false,
					meusFavoritos: [],
					meusFavoritosGeneros: [],
					artistaId: [],
					home: false,
					geraPlaylist: true,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
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
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					favoritos: true,
					topMusicas: false,
					topArtistas: false,
					relatedArtistas: false,
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
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
		var isChecked = this.state.isChecked;
		var isCheckedGenre = this.state.isCheckedGenre;
		var geraPlaylist = this.state.geraPlaylist;
		var gera = this.gera;

		var teste = artistas.map(function(artista) {
			return (
				<div className="input" style={{}}>
					<input type="checkbox" name={artista} onChange={click} />
					<label className="testeCheck" key={artista}>
						{artista}
					</label>
				</div>
			);
		});

		var teste_generos = generos.map(function(genero) {
			return (
				<div className="inputGenero" style={{ backgroundColor: 'white' }}>
					<Header></Header>
					<input type="checkbox" name={genero} ref="check_me" onChange={clickGeneros} />
					<label className="testeCheck" key={genero}>
						{genero}
					</label>
				</div>
			);
		});

		return (
			<div className="bloco-favoritos">
				<div>
					<Header></Header>
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

	gera = async () => {
		await axios
			.get('https://spotifyapimanager.herokuapp.com/router/userbyid', {
				params: {
					user: this.state.user
				}
			})
			.then((response) => {
				this.setState({
					dataGen: response.data.genero_fav,
					Antigas: false,
					Momento: false,
					Userplaylist: false,
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					favoritos: false,
					topMusicas: false,
					topArtistas: false,
					relatedArtistas: false,
					home: false,
					recomendacoes: true,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
				});
			})
			.catch((erro) => console.log(erro.response.data));
	};

	//------------------------------ BUSCA + SEGUIR---------------------------------------------------------------

	

	busca(){
		console.log('entrei no BUSCA')

		axios
			.get("https://api.spotify.com/v1/search?q="+this.state.keyword+"&type=playlist", {
				headers: {
					Authorization: `Bearer ${this.token}`
				},
			})

			
			.then((response) => {
				console.log(response)
				this.setState({
					playlistPesquisa: response.data.playlists.items,
					Antigas: false,
					Momento: false,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					topArtistas: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: false,
					recomendacoesPag: false,
					pesquisaPlaylist: true,
					isLoggedIn : true
					
					
				});
			})
			
			.catch((erro) => console.log(erro.response));

		
	}

	follow(idPlaylist){

		const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token}`,
            },
        };
        fetch("https://api.spotify.com/v1/playlists/"+idPlaylist+"/followers", requestOptions)
            
	}
	
	getid(){
		axios
			.get("https://api.spotify.com/v1/me", {
				headers: {
					Authorization: `Bearer ${this.token}`
				},
			})

			
			.then((response) => {
				console.log(response)
				this.setState({
					userId:response.data.id,
						
				});
			})
			
			.catch((erro) => console.log(erro.response));

		
	}

	verifica (id){
		console.log("vou verificar"+this.state.userId)
		
			axios
			.get("https://api.spotify.com/v1/playlists/"+id+"/followers/contains?ids="+this.state.userId, {
				headers: {
					Authorization: `Bearer ${this.token}`
				},
			})
			
			.then((response) => {

				this.setState({
					verificaFollow:response.data[0],
					seguindo:true
						
				});
				
			})
			
			
	}
	funcao1(id_musica, parametro){
		console.log("id da musica que vai para a função"+id_musica+"  "+parametro)


		
		if(parametro===false){
			console.log("eu não seguia");
			alert("Agora você está seguindo esta playlist!");
		} else{
			console.log("eu já sigo")
			alert("Você já seguia esta playlist");
		}
		
	}

	
		
	resultPlaylist(){
		console.log(this.state.userId)
		var playlistsResult = this.state.playlistPesquisa;
		var playlistR = playlistsResult.map((resultado) => {


			
				return (
					<div className="grid-item">
						<img className="imagesRound" src={resultado.images[0].url} width={150} height={150} />
						<div className="centralizacao">
							<p className="TrackName">{resultado.name}</p>
							
							<button onClick={() => {
								this.verifica(resultado.id)
								this.funcao1(resultado.id, this.state.verificaFollow); 
								this.follow(resultado.id); }} >Follow Playlist</button>
	
						</div>
					</div>
				);
			
			}
				

			
			
		);
		return (
			<div>{
				!this.state.isLoggedIn?<div className="bloco"> <h1 className="title">Por favor, faça login</h1></div> :
				<div className="bloco">
					<h1 className="title">Playlists {this.state.keyword}</h1>
					<div className="grid-container">{playlistR}</div>
				</div>
				}
			</div>
		);
		
	};


	

	//--------------------------------issue: Mostrar analise da Musica--------------

	analiseMusica = (id) => {
		console.log("entrei na analise")
		console.log(id)

		var url_analise = 'https://api.spotify.com/v1/audio-features/'+id
		console.log(url_analise)
		
		axios
			.get(url_analise, {
				headers: {
					Authorization: `Bearer ${this.token}`
				},
			})

			
			.then((response) => {
				console.log(response)
				this.setState({
					analise_musica: response.data,
					Antigas: false,
					Momento: false,
					Userplaylist: false,
					likedTracks: false,
					Novidades: false,
					topArtistas: false,
					relatedArtistas: false,
					topMusicas: false,
					favoritos: false,
					artistaId: [],
					home: false,
					boolean_analise: true,
					recomendacoesPag: false,
					pesquisaPlaylist: false,
					isLoggedIn : true
					
					
				});
			})
			
			.catch((erro) => console.log(erro.response));
			

			
		
	}
	
	

	musicCarac = () => {
		console.log("entrei na musicCarac")
		console.log("deveria ser true:"+this.state.boolean_analise)
		console.log(this.state.analise_musica)
		var analises = this.state.analise_musica;
		console.log(analises.danceability)

		return (
			<div>
				<div className="antigas">
					<p className="antigastxt">{analises.danceability}</p>
					<p className="antigastxt">{analises.energy}</p>
					
					<p className="antigastxt">{analises.instrumentalness}</p>
					<p className="antigastxt">{analises.track_href}</p>
					
				</div>
				<hr className="line" />
				
			</div>
			
		);

		return (
			<div className="bloco">
				<h1 className="title">Minhas Músicas</h1>
				<div className="separando">
					<div className="Texto"> Músicas</div>
					<div className="Texto"> Artista</div>
					<div className="Texto"> Tempo</div>
					<div className="Texto"> Analise</div>

				</div>
				<div className="tracks-container">
					<div>{analises}</div>
				</div>
			</div>
		);
		
			
	};
	

	// -------------------------------recomendaçoesPagina---------------------
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
					PlaylistTracks: false,
					likedTracks: false,
					Novidades: false,
					favoritos: false,
					topMusicas: false,
					topArtistas: false,
					relatedArtistas: false,
					home: false,
					recomendacoes: false,
					boolean_analise: false,
					recomendacoesPag: true,
					pesquisaPlaylist: false,
					isLoggedIn : true
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

	recentlyPlayedTrack = () => {
		axios.get('https://api.spotify.com/v1/me/player/recently-played', {
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			})
			.then((response) => {
				this.setState({
					recentlyPlayedTrack: response.data.items[0].track.id
				});
			})
			.catch((erro) => console.log(erro.response.data));
	}

	feaaturedPlaylists = () => {
		axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
			headers: {
				Authorization: `Bearer ${this.token}`
			}
		})
		.then((response) => {
			this.setState({
				featuredPlaylists: response.data.playlists.items,
				featuredPage: true,
				Userplaylist: false,
				Novidades: false,
				likedTracks: false,
				Momento: false,
				Antigas: false,
				topMusicas: false,
				topArtistas: false,
				favoritos: false,
				artistaId: [],
				home: false,
				recomendacoesPag: false
			});
			console.log(this.state.featuredPlaylists)
		})
		.catch((erro) => console.log(erro));
	}

	pagFeaturedP = () => {
		console.log(this.state.featuredPlaylists)
		var feat = this.state.featuredPlaylists;
		var featuredPage = feat.map((featured) => {
			return (
				<div className="grid-item">
					<img className="imagesRound" src={featured.images[0].url} width={150} height={150} />
					<div className="centralizacao">
						<p className="TrackName">{featured.name}</p>
					</div>
				</div>
			);
		});
		return (
			<div className="bloco">
				<h1 className="title">Featured Playlists</h1>
				<div className="grid-container">{featuredPage}</div>
			</div>
			)
		}

	render() {


		var recentlyPlayedTrackUrl = "https://open.spotify.com/embed/track/" + this.state.recentlyPlayedTrack
		return (
			<div className="body_home">
				<Header></Header>
				{/* <div className="container"> */}
				<div className="Home">
					<div class="img" />
					<div className="botoes">
						<button class="btn">
							<a class="link" href="https://spotifyapimanager.herokuapp.com/login">
								Logar com Spotify
							</a>
						</button>
						<button
							class="btn"
							style={{ backgroundColor: this.state.Userplaylist ? '#454D4B' : 'transparent' }}
							onClick={this.Userplaylist}
						>
							Suas playlists
						</button>
						<button
							class="btn"
							style={{ backgroundColor: this.state.topMusicas ? '#454D4B' : 'transparent' }}
							onClick={this.topMusic}
						>
							Suas músicas mais ouvidas
						</button>

						<button
							class="btn"
							style={{ backgroundColor: this.state.favoritos ? '#454D4B' : 'transparent' }}
							onClick={() => {
								this.setState({
									favoritos: true,
									Momento: false,
									Userplaylist: false,
									PlaylistTracks: false,
									likedTracks: false,
									Novidades: false,
									Antigas: false,
									topArtistas: false,
									relatedArtistas: false,
									topMusicas: false,
									meusFavoritos: [],
									meusFavoritosGeneros: [],
									home: false,
									recomendacoesPag: false,
									pesquisaPlaylist: false,
									boolean_analise: false
								});
							}}
						>
							Seus favoritos
						</button>
						<button
							class="btn"
							style={{ backgroundColor: this.state.topArtistas ? '#454D4B' : 'transparent' }}
							onClick={this.topArtist}
						>
							Seus artistas mais ouvidos
						</button>
						<button
							class="btn"
							style={{ backgroundColor: this.state.Novidades ? '#454D4B' : 'transparent' }}
							onClick={this.newRelease}
						>
							Novos lançamentos
						</button>
						<button
							class="btn"
							style={{ backgroundColor: this.state.likedTracks ? '#454D4B' : 'transparent' }}
							onClick={this.savedTracks}
						>
							Minhas Músicas
						</button>
						<button
							class="btn"
							style={{ backgroundColor: this.state.Momento ? '#454D4B' : 'transparent' }}
							onClick={() => {
								this.current();
								this.latest();
							}}
						>
							Escutando
						</button>


						<input name="keyword"
							value={this.state.keyword}
							onChange={this.handleChange} />
                    	<button onClick={() => {this.busca(); this.getid();}}>Buscar Playlist</button>
						<button
							className='btn'
							style={{ backgroundColor: this.state.featPage ? '#454D4B' : 'transparent' }}
							onClick={
								this.feaaturedPlaylists.bind(this)}

							>
							Featured 
						</button>


						<iframe class="player" src={recentlyPlayedTrackUrl} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
						
						<div className="lado2">
							<FacebookShareButton url={'https://musics4u.herokuapp.com/'} quote={'Utilize o Musics4U para tirar o maior proveito do seu Spotify!'}>
								<AiFillFacebook color={'white'} size={40} />
							</FacebookShareButton>
							<TwitterShareButton url={'https://musics4u.herokuapp.com/'} title={'Estou utilizando o Musics4U para tirar o maior proveito do meu Spotify!'} hashtags={['Music4U']}>
								<AiFillTwitterSquare color={'white'} size={40} />
							</TwitterShareButton>					
							<a href=" https://www.instagram.com/">
								<AiFillInstagram color={'white'} size={40} />
							</a>
							<a href=" https://www.linkedin.com/">
								<AiOutlineLinkedin color={'white'} size={40} />
							</a>
							<WhatsappShareButton url={'https://musics4u.herokuapp.com/'} quote={'Utilize o Musics4U para tirar o maior proveito do seu Spotify!'}>
							
								<WhatsappIcon bgStyle={{ fill: 'transparent' }} iconFillColor={'white'} size={40} />
							</WhatsappShareButton>
							<RedditShareButton
								title={"Venha conhecer o Musics4u e aproveite o máximo de sua experiência com o Spotify!"}
								url={"https://musics4u.herokuapp.com/"}>
								<RedditIcon size={"2.5rem"} round={true} borderRadius={"9px"} />
                			</RedditShareButton>

							

						</div>
					</div>
				</div>

				{this.state.home && this.recentlyPlayedTrack() && (
					<div className="blocoHome">
						<div>
							<img src={logoLindo} />
						</div>
						<div className="txt">
							{' '}
							<h4 className="bemVindo">Bem vindo ao Musics4U!</h4>
							<p className="homeDesc">
								{' '}
								Para ter acesso às suas funcionalidades utilize a navbar ao lado !{' '}
							</p>
						</div>
					</div>
				)}

				{this.state.Userplaylist && <div>{this.playlist()}</div>}
				{this.state.PlaylistTracks && <div>{this.list_tracks()}</div>}
				{this.state.Novidades && <div>{this.lancamentos_teste()}</div>}
				{this.state.likedTracks && <div>{this.myTracks()}</div>}
				{this.state.Momento && <div>{this.current_music()}</div>}
				{this.state.favoritos && <div>{this.seusFavoritos()} </div>}
				{this.state.topArtistas && <div>{this.fav_artists()}</div>}
				{this.state.relatedArtistas && <div>{this.rel_artists()}</div>}
				{this.state.topMusicas && <div>{this.fav_musics()}</div>}
				{this.state.recomendacoes && <div>{this.recomendacoesPag()}</div>}
				{this.state.recomendacoesPag && <div>{this.pag_recomend()}</div>}
				{this.state.featuredPage && <div>{this.pagFeaturedP()}</div>}
				{this.state.boolean_analise && <div>{this.musicCarac()}</div>}
				{this.state.pesquisaPlaylist && <div>{this.resultPlaylist()}</div>}

				{/* </div> */}
			</div>
		);
	}

}	

export default Home;