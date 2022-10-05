class RemoveUserIdFromGifts < ActiveRecord::Migration[7.0]
  def change
    remove_column :gifts, :user_id, :integer
  end
end
