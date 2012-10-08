class RemoveCreateTimestampFromPostits < ActiveRecord::Migration
  def up
    remove_column :postits, :create_timestamp
  end

  def down
    add_column :postits, :create_timestamp, :datetime
  end
end
