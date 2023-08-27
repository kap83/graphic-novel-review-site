class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :artist, :genre, :publisher, :volume, :cover_url, :user_id
end
