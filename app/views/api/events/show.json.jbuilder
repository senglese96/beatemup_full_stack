json.set! :event do
    json.partial! 'api/events/event', event: @event
end
json.set! :attendances do
    @attendances.each do |attendance|
        json.set! attendance.id do
            json.extract! attendance, :attendee_id, :event_id, :id
        end
    end
end
json.set! :users do
    @users.each do |attendee|
        json.set! attendee.id do
            json.partial! 'api/users/user', user: attendee
        end
    end
end
json.set! :groups do
    json.set! @group.id do
        json.partial! 'api/groups/group', group: @group
    end
end