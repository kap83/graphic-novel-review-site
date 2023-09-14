class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :artist, :volume, :cover_url 
  has_many :reviews


end
