class Book < ApplicationRecord
    has_many :reviews
    validates :title, :author, :artist, :genre, :publisher, :volume, :cover_url, presence: true
end
