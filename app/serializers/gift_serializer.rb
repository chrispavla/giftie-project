class GiftSerializer < ActiveModel::Serializer
  attributes :id, :gift_name, :description, :tags, :price, :quantity, :link_url, :image_url, :user_id, :wish_list_id
end
