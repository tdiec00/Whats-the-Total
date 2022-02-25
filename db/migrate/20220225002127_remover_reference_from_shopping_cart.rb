class RemoverReferenceFromShoppingCart < ActiveRecord::Migration[7.0]
  def change
    remove_column :shopping_carts, :product_id
  end
end
