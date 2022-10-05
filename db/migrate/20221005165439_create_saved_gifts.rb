class CreateSavedGifts < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_gifts do |t|
      t.string :gift_name
      t.text :description
      t.string :tags
      t.decimal :price
      t.integer :quantity
      t.string :link_url
      t.string :image_url
      t.integer :user_id
      t.integer :wish_list_id

      t.timestamps
    end
  end
end
