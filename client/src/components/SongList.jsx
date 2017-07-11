import React from 'react'
import Song from './Song.jsx'

//SongList is created with props: 'songs'
class SongList extends React.Component {

  render() {

    console.log("props: ", this.props)

    const songNodes = this.props.songs.map((song, index) => {
      return (
        <Song
          genre={song.category.attributes.label}
          key={index} chartPosition={index}
          artist={song["im:artist"].label}
          title={song["im:name"].label}>
        </Song>
      )
    })

    return (
      <div className="comment-list">
        {songNodes}
      </div>
    )
  }

}

export default SongList
