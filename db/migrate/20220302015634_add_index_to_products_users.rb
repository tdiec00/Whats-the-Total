class AddIndexToProductsUsers < ActiveRecord::Migration[7.0]
  def change
    add_index :products_users, :product_id, :unique => true
  end
end
