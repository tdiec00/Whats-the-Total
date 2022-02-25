# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Product.destroy_all

Product.create! [
  {name: "orange", price: 1, category: "fruits"},
  {name: "apple", price: 0.5, category: "fruits"},
  {name: "banana", price: 1.25, category: "fruits"},
  {name: "kiwi", price: 0.75, category: "fruits"},
  {name: "tangerine", price: 0.80, category: "fruits"},
  {name: "blue berry", price: 2.99, category: "fruits"},
  {name: "strawberry", price: 3.99, category: "fruits"},
  {name: "spinach", price: 1.25, category: "vegetables"},
  {name: "brocolli", price: 1.99, category: "vegetables"},
  {name: "lettuce", price: 0.75, category: "vegetables"},
  {name: "tomato", price: 1.15, category: "vegetables"},
  {name: "cauliflower", price: 1.99, category: "vegetables"},
  {name: "mint", price: 0.60, category: "vegetables"},
  {name: "bean sprouts", price: 1.75, category: "vegetables"},
  {name: "kale", price: 1.90, category: "vegetables"},
  {name: "napa cabbage", price: 0.5, category: "vegetables"},
  {name: "Hi C", price: 1.5, category: "drinks"},
  {name: "orange juice", price: 3.99, category: "drinks"},
  {name: "apple juice", price: 2.75, category: "drinks"},
  {name: "mountain dew", price: 2.99, category: "drinks"},
  {name: "pepsi", price: 2.99, category: "drinks"},
  {name: "monster", price: 3.99, category: "drinks"},
  {name: "ribeye", price: 24.99, category: "meats"},
  {name: "pork shoulder", price: 12.99, category: "meats"},
  {name: "ham", price: 5.99, category: "meats"},
  {name: "sirloin", price: 17.99, category: "meats"},
  {name: "chicken breast", price: 4.99, category: "meats"},
  {name: "lamb shank", price: 15.99, category: "meats"},
  {name: "whole milk", price: 4.99, category: "dairy"},
  {name: "string cheese", price: 2.99, category: "dairy"},
  {name: "cream cheese", price: 2.75, category: "dairy"},
  {name: "yoplait yogurt", price: 0.5, category: "dairy"},
  {name: "chobani", price: 2.49, category: "dairy"},
  {name: "celeste pizza", price: 1, category: "frozen"},
  {name: "hood chocolate ice cream", price: 3.99, category: "frozen"},
  {name: "ice", price: 2.99, category: "frozen"},
  {name: "corn", price: 0.79, category: "frozen"},
  {name: "brocolli", price: 1.50, category: "frozen"},
  {name: "tater tots", price: 2.50, category: "frozen"}
]

@trung = User.find(1)
@immanuel = User.find(2)
@orange = Product.find(3)
@tater = Product.find(41)
@brocolli = Product.find(40)
@chobani = Product.find(35)
@trung.products << [@orange, @tater, @brocolli, @chobani]
@immanuel.products << [@orange, @tater, @brocolli, @chobani]
