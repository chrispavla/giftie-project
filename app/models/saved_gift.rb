class SavedGift < ApplicationRecord
  belongs_to :user
  belongs_to :wish_list, optional: true 

  validates :gift_name, :price, presence: true
end
