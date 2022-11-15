class RemoveQuantityFromSavedGifts < ActiveRecord::Migration[7.0]
  def change
    remove_column :saved_gifts, :quantity, :integer
  end
end
