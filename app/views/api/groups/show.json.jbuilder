json.set! :group do
    json.partial! 'api/groups/group', group: @group
end
json.set! :users do
    @members.each do |member|
        json.set! member.id do
            json.partial! 'api/users/user', user: member
        end
    end
end