# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'

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
patrick = User.create!(username: 'Fraud', password: 'offthestage')
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
oracle = User.create!(username: 'Oracle', password: 'ScrubThatDish')
citiofbrass = User.create!(username: 'CitiofBrass', password: 'kingofthenorth')
jz = User.create!(username: 'Justin Xavier', password: 'spototea')
cb = User.create!(username: 'Christian Bishop', password: 'bigbucks')

user_ids = []

50.times do 
    new_user = User.create!(username: Faker::Name.unique.name, password: Faker::Lorem.characters(10))
    user_ids << new_user.id
end

Group.destroy_all
file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/beatemup_logo.png")
hk = Group.create!(category: 'Smash Ultimate', name: 'Help Katie', location: 'fremont', 
description: "The ohlone smash ultimate club. Who's Katie?", organizer_id: d.id)
hk.photo.attach(io: file, filename: 'beatemup_logo.png')

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/punk.jpeg")
inferno = Group.create!(category: 'Street Fighter V', name: 'Team  Inferno', location: 'New York', 
description: 'The best damn team in the street fighter league', organizer_id: p.id)
inferno.photo.attach(io: file, filename: 'punk.jpeg')

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/VGBootCamp_logo.jpg")
vgbc = Group.create!(category: 'Smash Ultimate', name: 'VG Bootcamp', location: 'Maryland', 
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
description: 'High level players of the fighting game skullgirls. We meet at such and such a time in such and such a place.', organizer_id: sfd.id)
skullgirls.photo.attach(io: file, filename: "skullgirls.jpg")

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/evo.jpg")
evo = Group.create!(category: 'All', name: 'Evo Commission', location: 'Las Vegas', 
description: 'Evo is the premier fighting game tournament in the world.', organizer_id: mrwizard.id)
evo.photo.attach(io: file, filename: "evo.jpg")

file = open("https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/fighterz.jpg")
fighterz = Group.create!(category: 'Dragon Ball FighterZ', name: 'Bardock Boys', location: 'Japan', 
description: 'Bardock is the friggin best and this group is here to prove it.', organizer_id: g.id)
fighterz.photo.attach(io: file, filename: "fighterz.jpg")

file = open('https://s3-us-west-1.amazonaws.com/beat-em-up-seeds/tourneylocator.jpeg')
tourneylocator = Group.create!(category: 'Smash Melee', name: 'Tourney Locator', location: 'Texas', 
description: 'Founded on a love of esports and competition, Tourney Locator began as an attempt to unite the DFW Smash community under one roof. With that accomplished, we are aiming to further the growth of the esports community on a local and national scale, one step at a time.', 
organizer_id: oracle.id)
tourneylocator.photo.attach(io: file, filename: "tourneylocator.jpg")

file = open('https://beat-em-up-seeds.s3-us-west-1.amazonaws.com/dtnlogo.png')
dtn = Group.create!(category: 'All', name: 'Defend The North', location: 'New York', 
description: "Defend the North is dedicated to creating awareness and appreciation for video games, it’s communities and related mediums primarily through the presentation of conventions and events that celebrate the historic and ongoing contribution of video games and it’s culture.", 
organizer_id: citiofbrass.id)
dtn.photo.attach(io: file, filename: "dtn.jpg")

file = open('https://beat-em-up-seeds.s3-us-west-1.amazonaws.com/electronic-dojo.jpg')
edojo = Group.create!(category: 'All', name: 'Electronic Dojo', location: 'United Kingdom', 
description: "As the UKs longest running fighting games community, Electronic Dojo is the team behind the European Major Tournament VSFighting. We've supported hundreds of events from tradeshows, product launches and promos to international events, all to support our competitive little scene!", 
organizer_id: jz.id)
edojo.photo.attach(io: file, filename: "edojo.jpg")

file = open('https://beat-em-up-seeds.s3-us-west-1.amazonaws.com/thunder.jpg')
thunder = Group.create(category: 'Smash Ultimate', name: 'Thunder Gaming', location: 'Los Angeles', 
description: "The biggest up and coming socal esports organization, with huge events in Smash brothers and more!", 
organizer_id: cb.id)


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
date: Date.new(2019, 6, 30),
group_id: evo.id)

evo_j = Event.create!(title: 'EVO Japan', 
event_address: 'Tokyo', 
category: 'tournament',
host_id: mrwizard.id,
details: 'The biggest fighting game tournament in Japan',
date: Date.new(2019, 8, 10),
group_id: evo.id)


sfl = Event.create!(title: 'Street Fighter League', 
event_address: 'New York', 
category: 'tournament',
host_id: p.id,
details: 'Street fighter league pits the biggest pros in street fighter against one another',
date: Date.new(2019, 5, 30),
group_id: inferno.id)

combo_breaker = Event.create!(title: 'Combo Breaker', 
event_address: 'Florida', 
category: 'tournament',
host_id: sonic.id,
details: 'Florida Major tournament featuring all of the top talent in fighting games',
date: Date.new(2019, 6, 28),
group_id: skullgirls.id)

summit = Event.create!(title: 'Summit of Power', 
event_address: 'California', 
category: 'tournament',
host_id: g.id,
details: 'Evo tournament',
date: Date.new(2019, 6, 21),
group_id: fighterz.id)

movie = Event.create!(title: 'Movie meetup', 
event_address: 'Fremont', 
category: 'Social Meetup',
host_id: d.id,
details: 'getting together to watch a movie!',
date: Date.new(2019, 6, 30),
group_id: hk.id)

lab_f = Event.create!(title: 'Practice Session', 
event_address: 'Los Angeles', 
category: 'Practice',
host_id: sonic.id,
details: 'P',
date: Date.new(2019, 6, 30),
group_id: skullgirls.id)

ssc = Event.create!(title: 'Super Smash Con', 
event_address: 'Maryland', 
category: 'convention',
host_id: gimr.id,
details: 'A massive gathering for all people who love super smash bros!',
date: Date.new(2019, 8, 10),
group_id: vgbc.id)

glitch = Event.create!(title: 'Glitch 6', 
event_address: 'Maryland', 
category: 'tournament',
host_id: gimr.id,
details: 'Tournament series in maryland hosted by vgbootcamp!',
date: Date.new(2019, 7, 16),
group_id: vgbc.id)

funday = Event.create!(title: 'Funday Tuesday', 
event_address: 'Los Angeles', 
category: 'Practice',
host_id: m.id,
details: 'On a tuesday!',
date: Date.new(2019, 5, 28),
group_id: norwalk.id)

the_mang = Event.create!(title: 'The Mango', 
event_address: 'Los Angeles', 
category: 'Tournament',
host_id: m.id,
details: 'The man, the myth, the mango returns with his own tournament series. BYOB.',
date: Date.new(2019, 6, 28),
group_id: norwalk.id)

defend = Event.create!(title: 'Defend the North 2019', 
event_address: 'New York City', 
category: 'Tournament',
host_id: citiofbrass.id,
details: "On July 19-21, the New Yorker Hotel hosts Defend the North: New York City's only Major Fighting Game Tournament! Widely considered to be one of the biggest travel destinations in the world, NYC is also home to a diverse gaming community with a rich and storied legacy. Don't miss out on the savings with pre-registration as it ends on July 12th. This summer, be a part of that legacy and register today!

Stay updated on all DTN2019 info such as tournament brackets, scheduling, announcements, streams and more by signing up for our newsletter!

Why Go to Defend the North?
- 20+ Tournaments for Current and Retro Games

- 30+ Different Games Available for Casual Play

- Arcade Room featuring Japanese Candy Cabs

- 24-hour Gaming in BYOC and Arcade Rooms

- 3 Days and Nights of Gaming for One Price

- Retro Events Crowdfunded via Matcherino

- Community-Run Side Tournaments

- Cosplay Contest with Cash Prizes

- Vendor and Exhibitor Booths

- Free Prizes and Giveaways

- And much more!",
date: Date.new(2019, 7, 19),
group_id: dtn.id)

vsfight = Event.create!(title: 'VSFighting 2019', 
event_address: 'Birmingham', 
category: 'Tournament',
host_id: jz.id,
details: "Europe's premier annual fighting games tournament is back for year 9! VSFighting is Electronic Dojo's flagship event; an open tournament hosting a range of fighting games with competitors travelling from all over the world! We have some exciting announcements on the way which we can't discuss just yet but...

Tekken 7 (Tekken World Tour MASTER Event) Street Fighter V: Arcade Edition (Capcom Pro Tour PREMIER Event) Mortal Kombat 11 (Interkontinental Kup event) Dead or Alive 6 (Dead or Alive World Championship Event) SoulCalibur VI DragonBall FighterZ Samurai Shodown Super Street Fighter II Turbo (as always!)

This year, we're powered by Astro who will support with audio mixers at every tournament setup, along with Zowie who will be supporting with lagless monitors! Bring your own headset or rent one for free at the event.",
date: Date.new(2019, 7, 20),
group_id: edojo.id)

tsmash = Event.create!(title: 'Thunder Smash 2', 
event_address: 'Los Angeles', 
category: 'Tournament',
host_id: cb.id,
details: 'Thunder Gaming presents the second Thunder Smash event: The SoCal Arcadian featuring a $5,000 prize pool

Think you're SoCal's Hidden Boss? Come prove it at The SoCal Arcadian! Anyone who is not on SoCal PR and resides in the region is qualified for entry.

Play in the SoCal Arcadian and watch the pros play in the invitational. Announcing pro players each day!

WHEN
July 28th, 2019

WHERE
Thunder Studios 20434 S. Santa Fe Ave. Long Beach, CA 90810',
date: Date.new(2019, 7, 28),
group_id: thunder.id)

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
Membership.create!(member_id: gimr.id, group_id: vgbc.id)
Membership.create!(member_id: mrwizard.id, group_id: evo.id)
Membership.create!(member_id: citiofbrass.id, group_id: dtn.id)
10.times do
    Membership.create(member_id: user_ids.sample, group_id: dtn.id)
end
Membership.create!(member_id: jz.id, group_id: edojo.id)
7.times do
    Membership.create!(member_id: user_ids.sample, group_id: edojo.id)
end
5.times do
    Membership.create!(member_id: user_ids.sample, group_id: thunder.id)
end

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
Attendance.create!(attendee_id: lffn.id, event_id: lab_f.id)
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
Attendance.create!(attendee_id: lffn.id, event_id: summit.id)
Attendance.create!(attendee_id: g.id, event_id: summit.id)
Attendance.create!(attendee_id: sonic.id, event_id: summit.id)
Attendance.create!(attendee_id: semj.id, event_id: summit.id)
23.times do
    Attendance.create!(attendee_id: user_ids.sample, event_id: defend.id)
end
30.times do
    Attendance.create!(attendee_id: user_ids.sample, event_id: vsfight.id)
end
21.times do
    Attendance.create!(attendee_id: user_ids.sample, event_id: tsmash.id)
end