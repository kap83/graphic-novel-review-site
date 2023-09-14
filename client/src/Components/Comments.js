import React, {useState, useEffect} from 'react'
//import EditableComments from './EditableComments'
import ReadOnlyComments from './ReadOnlyComments'

export default function Comments({selectedBook}) {

const [reviewsList, setReviewsList] = useState([])

useEffect(() => {
  //if selectedBooks.reviews exists, setReviewsList(selectedBook.reviews)
  if(selectedBook && selectedBook.reviews) {
    setReviewsList(selectedBook.reviews)
  }
}, [selectedBook])


  return (
    <>
      {reviewsList?.map(review => {
            let options = {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minutes: "numeric",
              seconds: "numeric"
            } 
            const timestamp = Date.parse(review.created_at)
            const formatDateAndTime = new Intl.DateTimeFormat('en-US', options).format(timestamp)
            return ( 
              <ReadOnlyComments 
              key={review.id}
              review={review} 
              formatDateAndTime={formatDateAndTime} />
            )
        }
        )}
    </>
  )
}
