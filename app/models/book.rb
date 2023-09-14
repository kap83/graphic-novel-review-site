class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    
    validates :title, :author, :artist, :volume, :cover_url, presence: true
end
