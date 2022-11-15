class ChangeGiftsPrice < ActiveRecord::Migration[7.0]
  def change
    change_column :gifts, :price, :decimal, precision: 8, scale: 2
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
