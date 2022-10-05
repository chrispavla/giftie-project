class User < ApplicationRecord
  has_many :saved_gifts 
  has_many :wish_lists, through: :saved_gifts  
  has_many :reviews
  has_secure_password
  validates :username, presence: :true, uniqueness: :true
end
