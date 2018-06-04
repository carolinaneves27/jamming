import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
      }

    handleNameChange(event) {
        const newPlaylistName = event.target.value;
        this.props.onNameChange(event.target.value);
      }

    render() {
        return(
            <div className="Playlist">
                <input OnChange ={this.handleNameChange} defaultValue = {'New Playlist'}/>
                <TrackList tracks = {this.props.playlistTracks} onRemove = {this.props.onRemove} onChange = {this.handleNameChange} />
                <a className="Playlist-save" onClick = {this.props.onSave}>SAVE</a>
            </div>
        )
    }
}

export default Playlist;