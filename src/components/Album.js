import React from 'react';

const Album = (album) => {
  const styles = {
    album: {
      border: "1px solid gray",
      boxShadow: "1px 1px 3px #888",
      margin: 10,
      padding: 10,
    },
    image: {
      borderRadius: 5,
      width:'100%'
    }
  }

  return (
    <div className="album col-3" style={styles.album}>
      <img src={ album.image } className="card-img-top" style={styles.image}/>
      <div className="card-block">
        <h4 className="card-title">Title: <a href={ album.href }>{ album.name }</a></h4>
        <p className="card-text">Artist: { album.artist }</p>
      </div>
    </div>
  )
}

export default Album;
