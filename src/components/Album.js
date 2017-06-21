import React from 'react';

const Album = (album) => {
  const styles = {
    album: {
      border: "1px solid gray",
      boxShadow: "1px 1px 3px #888",
      margin: 10,
      padding: 0,
    },
    image: {
      borderRadius: 5,
      margin: 10
    }
  }

  return (
    <div className="album card col-4" style={styles.album}>
      <img src={ album.images.url } className="card-img-top" style={styles.image}/>
      <div className="card-block">
        <h4 className="card-title">Title: <a href={ album.href }>{ album.name }</a></h4>
        <p className="card-text">Artist: { album.artists.name }</p>
      </div>
      <div className="card-footer">
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  )
}

export default Album;
