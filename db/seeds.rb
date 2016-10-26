# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Chore.create!(title: "WHATEVER YOU WANNA DO", body: "See title", done: false)
Chore.create!(title: "Get Coffee", body: "Go to specialties", done: true)
Chore.create!(title: "Volunteer at tech conference", body: "to get free stuff", done: false)
