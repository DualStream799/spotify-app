import axios from 'axios';
import React, { Component } from 'react';

class NewReleases extends Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.newReleases = this.newReleases.bind(this);
        
    };

    newReleases = () => {
        axios.get('https://api.spotify.com/v1/browse/new-releases?limit=16', {
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
                topMusicas: false,
                favoritos: false,
                artistaId: [],
                home: false,
                recomendacoesPag: false
            });
        })
        .catch((erro) => console.log(erro.response.data));
    }

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
			<div className="bloco">
				<h1 className="title">Novos lançamentos</h1>
				<div className="grid-container">{lancamento}</div>
			</div>
		);
	};

	};

 
export default NewReleases;