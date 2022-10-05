class RemoveWishlistIdFromGifts < ActiveRecord::Migration[7.0]
  def change
    remove_column :gifts, :wish_list_id, :integer
  end
end
