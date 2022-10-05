class CreateWishLists < ActiveRecord::Migration[7.0]
  def change
    create_table :wish_lists do |t|
      t.string :title
      t.date :event_date
      t.text :note

      t.timestamps
    end
  end
end
