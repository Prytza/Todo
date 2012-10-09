class AddUserIdToPostits < ActiveRecord::Migration
  def change
    add_column :postits, :user_id, :integer
    add_index :postits, :user_id
  end
end
