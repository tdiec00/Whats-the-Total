class RemoveReferenceFromProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :shopping_cart_id
  end
end
