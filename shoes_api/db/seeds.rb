# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shoe.create([
  { name: 'Air Max', brand: 'Nike', qty: 20},
  { name: 'Chuck Taylor\'s', brand: 'Converse', qty: 100},
  { name: 'Retro 3', brand: 'Air Jordan', qty: 50},
  { name: 'Yeezys', brand:'Adidas', qty: 45},
])

puts 'seeded database'
