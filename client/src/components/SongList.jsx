import React from 'react'
// import Comment from './Comment.jsx'

//SongList is created with props: 'songs'
class SongList extends React.Component {

  render() {

    console.log("props: ", this.props)

    const songNodes = this.props.songs.map((song, index) => {
      return (
        // <Song author={comment.author} key={comment.id}>{comment.text}</Song>
        <p>{index}</p>
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
