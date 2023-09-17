class Review < ApplicationRecord
    belongs_to :book
    belongs_to :user

    validates :comment, presence: true
    validates :comment, length: {minimum: 10}
    validates :user_id, uniqueness: {scope: :book_id, message: "You've already reviewed this book"}
  
end
