class RemoveTagsFromSavedGifts < ActiveRecord::Migration[7.0]
  def change
    remove_column :saved_gifts, :tags, :string
  end
end
