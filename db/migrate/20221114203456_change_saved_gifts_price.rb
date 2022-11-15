class ChangeSavedGiftsPrice < ActiveRecord::Migration[7.0]
  def change
    change_column :saved_gifts, :price, :decimal, precision: 8, scale: 2
  end
end
