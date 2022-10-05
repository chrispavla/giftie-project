class RemoveTagsFromGifts < ActiveRecord::Migration[7.0]
  def change
    remove_column :gifts, :tags, :string
  end
end
