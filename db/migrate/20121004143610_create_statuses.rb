class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.string :status
      t.references :postit

      t.timestamps
    end
    add_index :statuses, :postit_id
  end
end
