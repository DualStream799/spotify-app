import { Component } from 'react';
import axios from 'axios'

class UserPlaylist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: localStorage.getItem('token')
        }

        console.log(this.state.token)
        console.log('aaaaaaaaaaaaaaa')
    }
    

    Userplaylist = function() {
		axios
			.get('https://api.spotify.com/v1/me/playlists', {
				headers: {
					Authorization: `Bearer ${this.state.token}`
				}
			})
			.then((response) => {
				this.setState({
					data: response.data.items,
					user: response.data.items[0].owner.id,
					Userplaylist: true,
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
                //console.log(this.state.data)
                //console.log('daaataaa')
			})
			.catch((erro) => console.log(erro.response.data));
	};


	playlist = function() {
        var playlists = this.state.data;
        console.log("ooooooooooooooo")
		var playlistImg = playlists.map((playlist) => {
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
					</div>
					<hr className="lineORetorno" />
				</div>
            );
        }

        );
        this.setState({playlistImg: {playlistImg}}).then(
            console.log(this.state.playlistImg)
        )
    };
    
    render() {
		return (
			<div className="bloco">
				<h1 className="title">Suas playlists</h1>
				<div> {this.playlistImg}</div>
                <div>Oi</div>
			</div>
		);
    }
}

export default UserPlaylist;