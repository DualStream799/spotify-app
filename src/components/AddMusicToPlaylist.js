import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


const useStyles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  dropdown: {
    backgroundColor : "white"
  },
});





class AddMusicToPlaylist extends React.Component {
    constructor() {
      super()
      this.state = {
        loading: true,
        musicData : "",
        token : "",
        playlist: "",
        selectedPlaylistUri : ""

      }
      this.addToPlaylist = this.addToPlaylist.bind(this)
      this.handleChange = this.handleSelectChange.bind(this)

    }
  
    componentDidMount() {
        this.setState({
            loading: false,
            musicData: this.props.tracks,
            token : this.props.token,
            playlist : this.props.playlists,
            selectedPlaylist : "",
            selectedPlaylistUri : "",
            response: ""
        });

	};
    

    handleSelectChange(event, state1, state2) {
        const value = event.target.value
        const playlistDict ={}
        for (let i = 0; i < this.props.playlists.length; i++) {
            playlistDict[this.props.playlists[i].name] = this.props.playlists[i].id
          }
        this.setState({
          [state1]: value,
          [state2] : playlistDict[value]
        })
        console.log(this.state.selectedPlaylistUri)
      }

    addToPlaylist(event) {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.token}`,
            },
        };
        fetch('https://api.spotify.com/v1/playlists/'+ this.state.selectedPlaylistUri + '/tracks?uris=' + this.state.musicData.uri, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ response: data }));
    }


    render() {
        const { classes } = this.props;
        const playlistList = [];
        console.log(this.state.response)
        for (let i = 0; i < this.state.playlist.length; i++) {
            playlistList.push(<option value={this.state.playlist[i].name}>{this.state.playlist[i].name}</option>);
          }
        return (
            this.state.loading?<h1>Loading</h1>:
            <div className={classes.root}>
              <Button color="primary" variant="contained" onClick ={(e) => this.addToPlaylist(e)} >Adicionar</Button>
              <InputLabel htmlFor="age-native-simple">Escolha a playlist</InputLabel>
                <Select
                native
                className={classes.dropdown}
                value={this.state.selectedPlaylist}
                onChange={(e) => this.handleSelectChange(e, "selectedPlaylist", "selectedPlaylistUri" )}
                >
                <option aria-label="None" value="" />
                {playlistList}
                </Select>
          </div>
        );
    
      }
    }
export default withStyles(useStyles)(AddMusicToPlaylist)
