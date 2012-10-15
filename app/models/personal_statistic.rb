class PersonalStatistic < ActiveRecord::Base
  belongs_to :user
  attr_accessible :item_array, :nr_of_dropzones, :user_id
end
