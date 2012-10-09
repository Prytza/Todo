class Postit < ActiveRecord::Base
  attr_accessible :content, :create_timestamp, :deadline_timestamp, :title, :status, :user_id

  belongs_to :user

end
