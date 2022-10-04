class Gift < ApplicationRecord
  belongs_to :user, optional: true 
  belongs_to :wish_list, optional: true  
  has_many :reviews
end
