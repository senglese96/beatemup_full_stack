json.set! :group do
    json.partial! 'api/groups/group', group: @group
end
json.set! :memberships do
    @memberships.each do |membership|
        json.set! membership.id do
            json.extract! membership, :member_id, :group_id, :id
        end
    end
end
json.set! :users do
    @members.each do |member|
        json.set! member.id do
            json.partial! 'api/users/user', user: member
        end
    end
end
json.set! :events do
    @events.each do |event|
        json.set! event.id do
            json.partial! 'api/events/event', event: event
        end
    end
end