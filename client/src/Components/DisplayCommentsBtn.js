import React, {useState} from 'react'
import Comments from './Comments'
import AddComments from './AddComments'

export default function DisplayCommentsBtn({selectedBook}) {

    const [showCommentBtn, setShowCommentBtn] = useState(false)
    const [addCommentBtn, setAddCommentBtn] = useState(false)
    
    function handleShowCommentClick() {
      setShowCommentBtn(!showCommentBtn)
      setAddCommentBtn(false)
    }

    function handleAddCommentBtn() {
      setAddCommentBtn(!addCommentBtn)
      setShowCommentBtn(false)
    }


 
  return (
    <>
    <button onClick={handleAddCommentBtn}>{addCommentBtn === true ? "FORGET IT" : "ADD COMMENT"}</button> 
    <button type='button' onClick={handleShowCommentClick}>{showCommentBtn ? "HIDE COMMENTS" : "SHOW COMMENTS" }</button>
      {addCommentBtn === true ? <AddComments handleAddCommentBtn={handleAddCommentBtn}/> : null }
      {showCommentBtn ? <Comments selectedBook={selectedBook} /> : null }
      
    </>
  )
}
