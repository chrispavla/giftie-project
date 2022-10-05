class AddTagsToGifts < ActiveRecord::Migration[7.0]
  def change
    add_column :gifts, :tags, :string, array: true, default: []
  end
end
