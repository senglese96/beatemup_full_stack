# == Schema Information
#
# Table name: events
#
#  id            :bigint           not null, primary key
#  details       :string           not null
#  title         :string           not null
#  event_address :string           not null
#  category      :string           not null
#  date          :date             not null
#  host_id       :integer          not null
#  group_id      :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
