class AddReferenceToProduct < ActiveRecord::Migration[7.0]
  def change
    add_reference :shopping_carts, :product_id
  end
end
