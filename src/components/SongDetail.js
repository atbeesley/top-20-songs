import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;
  return (
    <div>
    <h2>
    {props.song["im:name"].label}
    </h2>
    <h3>
    {props.song["im:artist"].label}
    </h3>
  </div>




  )
}

export default SongDetail;
