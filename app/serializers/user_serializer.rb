class UserSerializer < ActiveModel::Serializer
 
  
  attributes :id, :first_name, :last_name, :username, :reviewed_books

  def reviewed_books
    #create an empty array to hold the required review and books attributes
    reviewed_books_data = []
  
    #map through object.book
    object.books.map do |book|
      #find the review by it's book_id
      review = object.reviews.find_by(book_id: book.id)
  
     #if a review is present shovel book.cover_url/review.comment into their associated keys.
      if review.present?
        reviewed_books_data << {
          book_id: book.id,
          cover_url: book.cover_url,
          title: book.title,
          review_id: review.id,
          comment: review.comment
        }
      end
    end
  
    reviewed_books_data
  end
end
