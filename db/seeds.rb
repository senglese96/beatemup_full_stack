# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
m = User.create!(username: 'Mang0', password: 'thatsthemango')
p = User.create!(username: 'Punk', password: 'PunkDaBest')
g = User.create!(username: 'GO1', password: 'GoUnoLoco')
d = User.create!(username: 'NoHablo96', password: 'GreenGoddess')
e = User.create!(username: 'Jebaily', password: 'Disqualified')
Group.destroy_all
hk = Group.create!(category: 'Smash Ultimate', name: 'Help Katie', location: 'fremont', description: 'ohlone ultimate club')

Event.destroy_all
Event.create!(title: 'Bay Battles', 
event_address: 'Ohlone', 
category: 'tournament',
host_id: d.id,
details: 'Ohlone Tournament',
date: Date.new(2019, 5, 10),
group_id: hk.id)

ceo = Event.create!(title: 'CEO', 
event_address: 'Florida', 
category: 'tournament',
host_id: e.id,
details: 'Ceo tournament',
date: Date.new(2019, 6, 14))

evo = Event.create!(title: 'EVO', 
event_address: 'Las Vegas', 
category: 'tournament',
host_id: m.id,
details: 'Evo tournament',
date: Date.new(2019, 6, 30))

Membership.destroy_all
Membership.create!(member_id: d.id, group_id: hk.id)
Membership.create!(member_id: m.id, group_id: hk.id)

Membership.destroy_all
Attendance.create!(attendee_id: p.id, event_id: ceo.id)
Attendance.create!(attendee_id: g.id, event_id: ceo.id)