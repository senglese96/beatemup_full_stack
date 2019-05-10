# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
m = User.create!(username: 'Mang0', password: 'thatsthemango')
p = User.create!(username: 'Punk', password: 'PunkDaBest')
g = User.create!(username: 'GO1', password: 'GoUnoLoco')
d = User.create!(username: 'NoHablo96', password: 'GreenGoddess')
sonic = User.create!(username: 'sonicfox', password: 'Fursona')
wei = User.create!(username: 'weisa', password: 'Doujin')
gimr = User.create!(username: 'Gimr', password: 'TheGimzWinz')
wb = User.create!(username: 'WhiteBoi', password: 'ScaryGuy')
semj = User.create!(username: 'semij', password: 'chipdamage')
lffn = User.create!(username: 'Leffen', password: 'evidencezip')
sfd = User.create!(username: 'swiftfoxdash', password: 'peabella')
patrick = User.create!(username: 'Fraud', passweiweiword: 'offthestage')
wesley = User.create!(username: 'Mentaiko', password: 'shoRyuKen')
ppmd= User.create!(username: 'PPMD', password: 'illbeback')
m2k= User.create!(username: 'Mew2King', password: 'lolm2k')
hbox  = User.create!(username: 'hungrybox', password: 'feelingcrabby')
armada = User.create!(username: 'Armada', password: 'stichface')
alex19= User.create!(username: 'Alex19', password: 'themagic')
lucky = User.create!(username: 'Lucky', password: 'bridesmaid')
s2j = User.create!(username: 'S2J', password: 'Johnnybgood')
brolylegs = User.create!(username: 'Brolylegs', password: 'themastahmouth')
jb = User.create!(username: 'JB', password: 'evidencezip')
mrwizard =User.create!(username: 'MrWizard', password: 'meleeisdead')

Group.destroy_all
file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/beatemup_logo.png")
hk = Group.create!(category: 'Smash Ultimate', name: 'Help Katie', location: 'fremont', 
description: "The ohlone smash ultimate club. Who's Katie", organizer_id: d.id)
hk.photo.attach(io: file, filename: 'beatemup_logo.png')

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/punk.jpeg")
inferno = Group.create!(category: 'Street Fighter V', name: 'Team  Inferno', location: 'New York', 
description: 'The best damn team in the street fighter league', organizer_id: p.id)
inferno.photo.attach(io: file, filename: 'punk.jpeg')

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/VGBootCamp_logo.jpg")
vgbc = Group.create!(category: 'Street Ultimate', name: 'VG Bootcamp', location: 'Maryland', 
description: 'The most prominent  streamer of all super smash brothers games. We host tournaments, and make many videos
on new tech that gets discovered in smash', organizer_id: gimr.id)
vgbc.photo.attach(io: file, filename: 'vgbc_logo.jpg')

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/norwalk.jpg")
norwalk = Group.create!(category: 'Smash Melee', name: 'Norwalk Melee', location: 'Los Angeles', 
description: 'We prefer the magic here in norwalk. where the spacies play and the floaties suck.', organizer_id: m.id)
norwalk.photo.attach(io: file, filename: "norwalk.jpg")

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/five_gods.jpg")
five_gods = Group.create!(category: 'Smash Melee', name: 'The Five Gods', location: 'Sweden, USA', 
description: 'The five gods of the greatest game of all time.', organizer_id: m2k.id)
five_gods.photo.attach(io: file, filename: "five_gods.jpg")

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/skullgirls.jpg")
skullgirls = Group.create!(category: 'Skullgirls', name: 'Skullgirls Lovers', location: 'Texas', 
description: 'High level players of the fighting game skullgirls. we meet at such and such a time in such and such a place.', organizer_id: sfd.id)
skullgirls.photo.attach(io: file, filename: "skullgirls.jpg")

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/evo.jpg")
evo = Group.create!(category: 'All', name: 'Evo Commission', location: 'Las Vegas', 
description: 'Evo is the premier fighting game tournament in the world.', organizer_id: mrwizard.id)
evo.photo.attach(io: file, filename: "evo.jpg")

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/fighterz.jpg")
fighterz = Group.create!(category: 'Dragon Ball FighterZ', name: 'Bardock Boys', location: 'Japan', 
description: 'Bardock is the friggin bestand this group is here to prove it.', organizer_id: g.id)
fighterz.photo.attach(io: file, filename: "fighterz.jpg")

Event.destroy_all

bb = Event.create!(title: 'Bay Battles', 
event_address: 'Ohlone', 
category: 'tournament',
host_id: d.id,
details: 'Ohlone Tournament',
date: Date.new(2019, 5, 10),
group_id: hk.id)

evo_t = Event.create!(title: 'EVO', 
event_address: 'Las Vegas', 
category: 'tournament',
host_id: mrwizard.id,
details: 'Evo tournament',
date: Date.new(2019, 6, 30)
group_id: evo.id)

evo_j = Event.create!(title: 'EVO Japan', 
event_address: 'Tokyo', 
category: 'tournament',
host_id: mrwizard.id,
details: 'The biggest fighting game tournament in Japan',
date: Date.new(2019, 8, 10)
group_id: evo.id)


sfl = Event.create!(title: 'Street Fighter League', 
event_address: 'New York', 
category: 'tournament',
host_id: p.id,
details: 'Street fighter league pits the biggest pros in street fighter against one another',
date: Date.new(2019, 5, 30)
group_id: inferno.id)

combo_breaker = Event.create!(title: 'Combo Breaker', 
event_address: 'Florida', 
category: 'tournament',
host_id: sonic.id,
details: 'Florida Major tournament featuring all of the top talent in fighting games',
date: Date.new(2019, 6, 27)
group_id: skullgirls.id)

summit = Event.create!(title: 'Summit of Power', 
event_address: 'California', 
category: 'tournament',
host_id: g.id,
details: 'Evo tournament',
date: Date.new(2019, 6, 21)
group_id: fighterz.id)

movie = Event.create!(title: 'Movie meetup', 
event_address: 'Fremont', 
category: 'Social Meetup',
host_id: d.id,
details: 'getting together to watch a movie!',
date: Date.new(2019, 6, 30)
group_id: hk.id)

lab_f = Event.create!(title: 'Practice Session', 
event_address: 'Los Angeles', 
category: 'Practice',
host_id: sonic.id,
details: 'P',
date: Date.new(2019, 6, 30)
group_id: skullgirls.id)

ssc = Event.create!(title: 'Super Smash Con', 
event_address: 'Maryland', 
category: 'convention',
host_id: gimr.id,
details: 'A massive gathering for all people who love super smash bros!',
date: Date.new(2019, 8, 10)
group_id: vgbc.id)

glitch = Event.create!(title: 'Glitch 6', 
event_address: 'Maryland', 
category: 'tournament',
host_id: gimr.id,
details: 'Tournament series in maryland hosted by vgbootcamp!',
date: Date.new(2019, 7, 16)
group_id: vgbc.id)

funday = Event.create!(title: 'Funday Tuesday', 
event_address: 'Los Angeles', 
category: 'Practice',
host_id: m.id,
details: 'On a tuesday!',
date: Date.new(2019, 5, 28)
group_id: norwalk.id)

the_mang = Event.create!(title: 'The Mango', 
event_address: 'Los Angeles', 
category: 'Tournament',
host_id: m.id,
details: 'The man, the myth, the mango returns with his own tournament series. BYOB.',
date: Date.new(2019, 5, 28)
group_id: norwalk.id)


Membership.destroy_all
Membership.create!(member_id: d.id, group_id: hk.id)
Membership.create!(member_id: patrick.id, group_id: hk.id)
Membership.create!(member_id: wei.id, group_id: hk.id)
Membership.create!(member_id: wesley.id, group_id: hk.id)
Membership.create!(member_id: p.id, group_id: inferno.id)
Membership.create!(member_id: brolylegs.id, group_id: inferno.id)
Membership.create!(member_id: jb.id, group_id: inferno.id)
Membership.create!(member_id: m.id, group_id: five_gods.id)
Membership.create!(member_id: ppmd.id, group_id: five_gods.id)
Membership.create!(member_id: m2k.id, group_id: five_gods.id)
Membership.create!(member_id: armada.id, group_id: five_gods.id)
Membership.create!(member_id: hbox.id, group_id: five_gods.id)
Membership.create!(member_id: g.id, group_id: fighterz.id)
Membership.create!(member_id: lffn.id, group_id: fighterz.id)
Membership.create!(member_id: sonic.id, group_id: fighterz.id)
Membership.create!(member_id: sonic.id, group_id: skullgirls.id)
Membership.create!(member_id: sfd.id, group_id: skullgirls.id)
Membership.create!(member_id: d.id, group_id: skullgirls.id)
Membership.create!(member_id: semj.id, group_id: skullgirls.id)
Membership.create!(member_id: m.id, group_id: norwalk.id)
Membership.create!(member_id: alex19.id, group_id: norwalk.id)
Membership.create!(member_id: lucky.id, group_id: norwalk.id)
Membership.create!(member_id: s2j.id, group_id: norwalk.id)

Attendance.destroy_all
Attendance.create!(attendee_id: p.id, event_id: evo_t.id)
Attendance.create!(attendee_id: sonic.id, event_id: evo_t.id)
Attendance.create!(attendee_id: semj.id, event_id: evo_t.id)
Attendance.create!(attendee_id: lffn.id, event_id: evo_t.id)
Attendance.create!(attendee_id: jb.id, event_id: evo_t.id)
Attendance.create!(attendee_id: brolylegs.id, event_id: evo_t.id)
Attendance.create!(attendee_id: sfd.id, event_id: evo_t.id)
Attendance.create!(attendee_id: patrick.id, event_id: bb.id)
Attendance.create!(attendee_id: wesley.id, event_id: bb.id)
Attendance.create!(attendee_id: d.id, event_id: bb.id)
Attendance.create!(attendee_id: wei.id, event_id: bb.id)
Attendance.create!(attendee_id: g.id, event_id: evo_j.id)
Attendance.create!(attendee_id: p.id, event_id: evo_j.id)
Attendance.create!(attendee_id: sonic.id, event_id: evo_j.id)
Attendance.create!(attendee_id: wesley.id, event_id: evo_j.id)
Attendance.create!(attendee_id: p.id, event_id: sfl.id)
Attendance.create!(attendee_id: brolylegs.id, event_id: sfl.id)
Attendance.create!(attendee_id: jb.id, event_id: sfl.id)
Attendance.create!(attendee_id: p.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: brolylegs.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: g.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: gimr.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: lffn.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: sonic.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: sfd.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: lucky.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: m2k.id, event_id: combo_breaker.id)
Attendance.create!(attendee_id: patrick.id, event_id: movie.id)
Attendance.create!(attendee_id: wesley.id, event_id: movie.id)
Attendance.create!(attendee_id: d.id, event_id: movie.id)
Attendance.create!(attendee_id: wei.id, event_id: movie.id)
Attendance.create!(attendee_id: llfn.id, event_id: lab_f.id)
Attendance.create!(attendee_id: g.id, event_id: lab_f.id)
Attendance.create!(attendee_id: sonic.id, event_id: lab_f.id)
Attendance.create!(attendee_id: gimr.id, event_id: lab_f.id)
Attendance.create!(attendee_id: patrick.id, event_id: ssc.id)
Attendance.create!(attendee_id: wesley.id, event_id: ssc.id)
Attendance.create!(attendee_id: d.id, event_id: ssc.id)
Attendance.create!(attendee_id: wei.id, event_id: ssc.id)
Attendance.create!(attendee_id: lffn.id, event_id: ssc.id)
Attendance.create!(attendee_id: m.id, event_id: ssc.id)
Attendance.create!(attendee_id: m2k.id, event_id: ssc.id)
Attendance.create!(attendee_id: armada.id, event_id: ssc.id)
Attendance.create!(attendee_id: ppmd.id, event_id: ssc.id)
Attendance.create!(attendee_id: gimr.id, event_id: ssc.id)
Attendance.create!(attendee_id: s2j.id, event_id: ssc.id)
Attendance.create!(attendee_id: lucky.id, event_id: ssc.id)
Attendance.create!(attendee_id: lffn.id, event_id: glitch.id)
Attendance.create!(attendee_id: m.id, event_id: glitch.id)
Attendance.create!(attendee_id: m2k.id, event_id: glitch.id)
Attendance.create!(attendee_id: armada.id, event_id: glitch.id)
Attendance.create!(attendee_id: ppmd.id, event_id: glitch.id)
Attendance.create!(attendee_id: gimr.id, event_id: glitch.id)
Attendance.create!(attendee_id: s2j.id, event_id: glitch.id)
Attendance.create!(attendee_id: lucky.id, event_id: glitch.id)
Attendance.create!(attendee_id: alex19.id, event_id: glitch.id)
Attendance.create!(attendee_id: s2j.id, event_id: funday.id)
Attendance.create!(attendee_id: lucky.id, event_id: funday.id)
Attendance.create!(attendee_id: alex19.id, event_id: funday.id)
Attendance.create!(attendee_id: m.id, event_id: funday.id)
Attendance.create!(attendee_id: sonic.id, event_id: the_mang.id)
Attendance.create!(attendee_id: wei.id, event_id: the_mang.id)
Attendance.create!(attendee_id: lffn.id, event_id: the_mang.id)
Attendance.create!(attendee_id: m.id, event_id: the_mang.id)
Attendance.create!(attendee_id: m2k.id, event_id: the_mang.id)
Attendance.create!(attendee_id: armada.id, event_id: the_mang.id)
Attendance.create!(attendee_id: ppmd.id, event_id: the_mang.id)
Attendance.create!(attendee_id: gimr.id, event_id: the_mang.id)
Attendance.create!(attendee_id: s2j.id, event_id: the_mang.id)
Attendance.create!(attendee_id: lucky.id, event_id: the_mang.id)