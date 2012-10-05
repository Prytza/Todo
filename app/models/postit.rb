class Postit < ActiveRecord::Base
  attr_accessible :content, :create_timestamp, :deadline_timestamp, :title

  has_one :status

end
