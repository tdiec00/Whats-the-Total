class AddReferenceToProducts < ActiveRecord::Migration[7.0]
  def change
    add_reference :products, :shopping_cart, null: false, foreign_key: true
  end
end
