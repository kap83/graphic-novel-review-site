class BookSerializer < ActiveModel::Serializer
  #attributes :id, :title, :author, :artist, :volume, :cover_url, :user_review_details
  attributes :id, :title, :author, :artist, :volume, :cover_url

  has_many :reviews


# def user_review_details
#   user_data = []
#   object.users.map do |user|
#     review = object.reviews.find_by(user_id: user.id)
#     user_data << {
#        username: user.username,
#        user_id: user.id,
#        review_id: review.id,
#        comment: review.comment,
#        created_at: review.created_at
#     }
#   end
#   user_data
# end


end
