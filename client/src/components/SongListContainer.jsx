import React from 'react';
import SongList from './SongList';

class SongListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);

      console.log("data: ", data.feed.entry);
      this.setState( {songs: data.feed.entry} )
    }
    request.send();
  }

  render() {
    return (
      <div className="songlist-container">
        <h1>UK Top 20</h1>
        <SongList songs={this.state.songs} />
      </div>
    );
  }

}

export default SongListContainer;
