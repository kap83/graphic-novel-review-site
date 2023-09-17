class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :artist, :volume, :cover_url, :user_review_details


def user_review_details
  user_data = []
  object.users.map do |user|
    review = object.reviews.find_by(user_id: user.id)
    user_data << {
       username: user.username,
       user_id: user.id,
       comment: review.comment,
       created_at: review.created_at
    }
  end
  user_data
end


end
