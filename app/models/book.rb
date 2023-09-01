class Book < ApplicationRecord
    validates :title, :author, :artist, :genre, :publisher, :volume, :cover_url, presence: true
end
