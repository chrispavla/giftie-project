class RemoveQuantityFromGifts < ActiveRecord::Migration[7.0]
  def change
    remove_column :gifts, :quantity, :integer
  end
end
