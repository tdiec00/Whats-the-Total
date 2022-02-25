class ShoppingCart < ApplicationRecord
  belongs_to :user
  has_many :products, through: :users, dependent: :destroy
end
