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

class Group < ApplicationRecord
    validates :category, :location, presence: true
    validates :name,  presence: true, uniqueness: true

    has_many(
        :events,
        foreign_key: :group_id,
        class_name: 'Event'
    )

    has_many(
        :memberships,
        foreign_key: :group_id,
        class_name: 'Membership'
    )

    has_many(
        :members,
        through: :memberships,
        source: :member
    )
end
