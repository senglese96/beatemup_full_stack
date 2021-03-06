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

class Event < ApplicationRecord
    validates :host_id, :title, :details, :category, :event_address, :date, presence: true

    belongs_to(
        :host,
        foreign_key: :host_id,
        class_name: 'User'
    )

    belongs_to(
        :group,
        foreign_key: :group_id,
        class_name: 'Group',
        optional: true
    )

    has_many(
        :attendances,
        foreign_key: :event_id,
        class_name: 'Attendance'
    )

    has_many(
        :attendees,
        through: :attendances,
        source: :attendee
    )

    has_one_attached :photo
end
