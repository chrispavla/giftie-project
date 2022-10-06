class SavedGift < ApplicationRecord
  belongs_to :user, optional: true 
  belongs_to :wish_list, optional: true 

  validates :gift_name, presence: true
end
