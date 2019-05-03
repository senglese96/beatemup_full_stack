# == Schema Information
#
# Table name: attendances
#
#  id          :bigint           not null, primary key
#  attendee_id :integer          not null
#  event_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Attendance < ApplicationRecord
    validates :attendee_id, :event_id, presence: true

    belongs_to(
        :attendee,
        foreign_key: :attendee_id,
        class_name: 'User'
    )

    belongs_to(
        :event,
        foreign_key: :event_id,
        class_name: 'Event'
    )
end
