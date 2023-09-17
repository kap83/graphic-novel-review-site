import React, {useState, useEffect} from 'react'
import ReadOnlyComments from './ReadOnlyComments'

export default function Comments({selectedBook}) {

const [reviewsList, setReviewsList] = useState([])



useEffect(() => {
  //if selectedBooks.reviews exists, setReviewsList(selectedBook.reviews)
  if(selectedBook && selectedBook.user_review_details) {
    setReviewsList(selectedBook.user_review_details)
  }
}, [selectedBook])

//click show comments, get all reviews for this book
console.log("comments", reviewsList)


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
