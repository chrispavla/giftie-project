class SavedGiftSerializer < ActiveModel::Serializer
  attributes :id, :gift_name, :description, :price, :link_url, :image_url, :user_id, :wish_list_id

  def price
    object.price.to_d
  end

end
