class WishListSerializer < ActiveModel::Serializer
  attributes :id, :title, :event_date, :note
  has_many :gifts
end
