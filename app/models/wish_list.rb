class WishList < ApplicationRecord
  has_many :saved_gifts 
  has_many :users, through: :saved_gifts
end
