import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    this.state= {
      searchResults: [
        {name: 'Hello', artist: 'Adelde', album: 'Blah', id: 1},
        {name: 'Track2 name', artist: 'Track2 artist', album: 'Track2 album', id: 2},
        {name: 'Track3 name', artist: 'Track3 artist', album: 'Track3 album', id: 3}
      ],

      playlistTracks: [
       {name: 'Hello', artist: 'Adelde', album: 'Blah', id: 4},
        {name: 'PlaylistTrack2 name', artist: 'PlaylistTrack2 artist', album: 'PlaylistTrack2 album', id: 5},
        {name: 'PlaylistTrack3 name', artist: 'PlaylistTrack3 artist', album: 'PlaylistTrack3 album', id: 6}
      ],

      playlistName: 'My Playlist',
    }
  };

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }

  updatePlaylistName(name){
    this.setState({
        playlistName: name
    });
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
  }

  search(term) {
    Spotify.search(term).then(searchResults => this.setState({
      searchResults: searchResults
    }));
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist 
              playlistName = {this.state.playlistName}
              playlistTracks = {this.state.playlistTracks}
              onRemove = {this.removeTrack}
              onNameChange = {this.updatePlaylistName}
              onSave={this.savePlaylist}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
