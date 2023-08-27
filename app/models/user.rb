class User < ApplicationRecord
    has_secure_password
    has_many :books
    validates :first_name, :last_name, presence: true
    validates :username, presence: true, uniqueness: true

end
