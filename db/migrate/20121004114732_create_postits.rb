class CreatePostits < ActiveRecord::Migration
  def change
    create_table :postits do |t|
      t.string :title
      t.text :content
      t.datetime :create_timestamp
      t.string :status
      t.datetime :deadline_timestamp

      t.timestamps
    end
  end
end
