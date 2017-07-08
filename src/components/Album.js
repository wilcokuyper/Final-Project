import React from 'react';

const Album = (album) => {
  const styles = {
    album: {
      border: "1px solid gray",
      boxShadow: "1px 1px 3px #888",
      margin: '0 1.5% 2em 1.5%',
      padding: 10,
      width: '30%',
    },
    image: {
      borderRadius: 5,
      width:'100%'
    }
  }

  return (
    <div className="card" style={styles.album}>
      <img src={ album.image } className="card-img-top" style={styles.image}/>
      <div className="card-block">
        <p className="card-title">Title: <a href={ album.href }>{ album.name }</a></p>
        <p className="card-text">Artist: { album.artist }</p>
      </div>
    </div>
  )
}

export default Album;
