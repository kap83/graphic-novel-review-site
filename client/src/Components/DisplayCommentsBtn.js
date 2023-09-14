import React, {useState} from 'react'

import Comments from './Comments'

export default function DisplayCommentsBtn({selectedBook}) {

    const [clicked, setClicked] = useState(false)
    
    function handleClick() {
        setClicked(!clicked)
    }

 
  return (
    <>
      <button type='button' onClick={handleClick}>{clicked ? "HIDE COMMENTS" : "SHOW COMMENTS" }</button>
      {clicked ? <Comments selectedBook={selectedBook} /> : null }
    </>
  )
}
