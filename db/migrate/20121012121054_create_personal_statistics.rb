class CreatePersonalStatistics < ActiveRecord::Migration
  def change
    create_table :personal_statistics do |t|
      t.integer :nr_of_dropzones
      t.string :item_array
      t.references :user

      t.timestamps
    end
    add_index :personal_statistics, :user_id
  end
end
