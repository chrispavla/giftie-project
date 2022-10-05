class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :gift_id, :user_id, :review, :ranking
end
