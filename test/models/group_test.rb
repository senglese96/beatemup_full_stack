# == Schema Information
#
# Table name: groups
#
#  id          :bigint           not null, primary key
#  category    :string           not null
#  description :string
#  name        :string           not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
