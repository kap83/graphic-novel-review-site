class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    validates :title, :author, :artist, :genre, :publisher, :volume, :cover_url, presence: true
end
