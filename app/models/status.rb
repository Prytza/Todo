class Status < ActiveRecord::Base
  belongs_to :postit
  attr_accessible :status
end
