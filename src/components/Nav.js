import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import logoLindo from '../logoLindo.png';
import { Component } from 'react';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterSquare,
	AiOutlineLinkedin
} from 'react-icons/ai';
import DarkModeToggle from "react-dark-mode-toggle";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          }
        }
    render() {
        return(
        <div className="body_home">
        <div className="Home">
            <div class="img" />
            <div className="botoes">
                <button className="btn">
                    <a className="link" href="https://spotifyapimanager.herokuapp.com/login">
                        Logar com Spotify
                    </a>
                </button>
                <Link to="/userPlaylist" 
                className='btn'
                >Suas playlists</Link>
                
                <Link to="/topMusic" 
                className='btn'
                >Suas músicas mais ouvidas</Link>
                
                {/* <button
                    className="btn"
                    style={{ backgroundColor: this.state.favoritos ? '#454D4B' : 'transparent' }}
                    onClick={() => {
                        this.setState({
                            favoritos: true,
                            Momento: false,
                            Userplaylist: false,
                            likedTracks: false,
                            Novidades: false,
                            Antigas: false,
                            topArtistas: false,
                            topMusicas: false,
                            meusFavoritos: [],
                            meusFavoritosGeneros: [],
                            home: false,
                            recomendacoesPag: false
                        });
                    }}
                >
                    Seus favoritos
                </button> */}

                <Link to="/favorites" 
                className='btn'
                >Seus favoritos</Link>
                {/* <button
                    class="btn"
                    style={{ backgroundColor: this.state.topArtistas ? '#454D4B' : 'transparent' }}
                    onClick={this.topArtist}
                >
                    Seus artistas mais ouvidos
                </button> */}
                <Link to="/topArtists" 
                className='btn'
                >Seus artistas mais ouvidos</Link>
                {/* <button
                    class="btn"
                    style={{ backgroundColor: this.state.Novidades ? '#454D4B' : 'transparent' }}
                    onClick={this.newRelease}
                >
                    Novos lançamentos
                </button> */}

                <Link to="/newReleases" 
                className='btn'
                >Novos lançamentos</Link>
                {/* <button
                    class="btn"
                    style={{ backgroundColor: this.state.likedTracks ? '#454D4B' : 'transparent' }}
                    onClick={this.savedTracks}
                >
                    Minhas Músicas
                </button> */}
                <Link to="/savedTracks" 
                className='btn'
                >Minhas Músicas</Link>
                {/* <button
                    class="btn"
                    style={{ backgroundColor: this.state.Momento ? '#454D4B' : 'transparent' }}
                    onClick={() => {
                        this.current();
                        this.latest();
                    }}
                >
                    Escutando
                </button> */}
                <Link to="/current" 
                className='btn'
                >Escutando</Link>

                <DarkModeToggle
                onClick={this.state.setIsDarkMode}
                checked={this.state.isDarkMode}
                size={80}
                
                />

                <div className="lado2">
                    <a href=" https://pt-br.facebook.com/">
                        <AiFillFacebook color={'white'} size={40} />
                    </a>
                    <a href="https://twitter.com/login?lang=pt">
                        <AiFillTwitterSquare color={'white'} size={40} />
                    </a>
                    <a href=" https://www.instagram.com/">
                        <AiFillInstagram color={'white'} size={40} />
                    </a>
                    <a href=" https://www.linkedin.com/">
                        <AiOutlineLinkedin color={'white'} size={40} />
                    </a>
                </div>
            </div>
        </div>

        {this.state.home && (
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
        {this.state.Novidades && <div>{this.lancamentos_teste()}</div>}
        {this.state.likedTracks && <div>{this.myTracks()}</div>}
        {this.state.Momento && <div>{this.current_music()}</div>}
        {this.state.favoritos && <div>{this.seusFavoritos()} </div>}
        {this.state.topArtistas && <div>{this.fav_artists()}</div>}
        {this.state.topMusicas && <div>{this.fav_musics()}</div>}
        {this.state.recomendacoes && <div>{this.recomendacoesPag()}</div>}
        {this.state.recomendacoesPag && <div>{this.pag_recomend()}</div>}
        {/* </div> */}
    </div>
        );
    }
}

export default Nav;