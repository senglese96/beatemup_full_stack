class Group < ApplicationRecord
    validates :category, :location, presence: true
    validates :name,  presence: true, uniqueness: true

    has_many(
        :events,
        foreign_key: :group_id,
        class_name: 'Event'
    )
end
