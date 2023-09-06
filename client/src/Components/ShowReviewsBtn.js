import React, {useState} from 'react'

import Reviews from './Reviews'

export default function ShowReviewsBtn({selectedBook}) {

    const [clicked, setClicked] = useState(false)
    

    function handleClick() {
        setClicked(!clicked)
    }

 

  return (
    <>
      <button type='button' onClick={handleClick}>{clicked ? "Hide Comments" : "Show Comments" }</button>
      {clicked ? <Reviews selectedBook={selectedBook} /> : null }
    </>
  )
}
