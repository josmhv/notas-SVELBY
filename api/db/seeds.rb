# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

jose = Usr.create(
  name: "Jose"
)

otro = Usr.create(
  name: "Otro"
)

Post.create(
  title: "Jose's post",
  body: "Este es el primer post",
  usr_id: jose.id
)

Post.create(
  title: "Otro's post",
  body: "Segundo post",
  usr_id: otro.id
)
