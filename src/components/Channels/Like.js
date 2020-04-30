import React, {useState} from 'react'

function Like() {
  const [selected, pressLike] = useState(false);
  const fav = '❤';
  const unfav = '♡';

  return (
    <a href="#" class="heart" onClick={() => pressLike(!selected)}>
      { selected ? fav : unfav}
    </a>
  )
}

export default Like
