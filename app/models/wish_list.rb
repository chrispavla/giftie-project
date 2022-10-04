class WishList < ApplicationRecord
  has_many :gifts 
  has_many :users, through: :gifts
end
