class ReviewSerializer < ActiveModel::Serializer
  # belongs_to :user
  # belongs_to :book
  
  attributes :id, :comment, :user_id, :book_id, :created_at, :username
 
 #obj refers to the instances of the review model that is being serialized by the serializer. 
 def username
  object.user.username
end


end
