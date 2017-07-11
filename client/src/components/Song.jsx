import React from 'react'

//Song is created with props: 'genre', 'key', 'title'.
class Song extends React.Component {

  render() {
    return (
      <div className="song">
        <h4 className="song-title">
          At number { this.props.chartPosition + 1}! - { this.props.title }
        </h4>
        <h5>{ this.props.genre }, { this.props.artist }</h5>
      </div>
    )
  }
}

export default Song
