import React from 'react';

const Album = (props) => {
  const style = {
    marginBottom: 20
  }

  return (
    <div className="album" style={style}>
      <img src={ props.images[1].url } />
      <div>
        Title: <a href={ props.href }>{ props.name } </a><br />
        Artist: { props.artists[0].name }
      </div>
    </div>
  )
}

export default Album;
