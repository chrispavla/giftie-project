class GiftSerializer < ActiveModel::Serializer
  attributes :id, :gift_name, :description, :tags, :price, :link_url, :image_url
end
