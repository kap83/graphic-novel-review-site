class Book < ApplicationRecord
    
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    
    validates :title, :author, :artist, :volume, :cover_url, presence: true
end
