class User < ApplicationRecord
    has_many :reviews
    has_many :books, through: :reviews
    
    has_secure_password
    
    validates :first_name, :last_name, presence: true
    validates :username, presence: true, uniqueness: true

end
